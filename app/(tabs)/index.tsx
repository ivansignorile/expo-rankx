import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Heading from "@/components/ui/Heading";
import SubHeading from "@/components/ui/SubHeading";
import Gallery from "@/components/ui/Gallery";
import styles from "@/utils/css";
import { useTranslation } from "react-i18next";
import Box from "@/components/ui/Box";
import VerticalCard from "@/components/ui/VerticalCard";
import { useEffect, useState } from "react";
import { getPackages, returnCardColorFromName } from "@/utils/service";
import { useRouter } from "expo-router";
import { setCurrentFigher, setCurrentPlace } from "@/utils/user.slice";
import { useDispatch } from "react-redux";
import { retrieveFighters } from "@/utils/rankx";
import { Widget } from "@/components/nextEvent/Widget";
import Accordion from "@/components/ui/Accordion";

interface Fighter {
  attributes: {
    team?: string;
  };
}

interface Team {
  name: string;
  slug: string;
  fighters?: Fighter[]; // Add the fighters property to the Team interface
}

interface FighterAttributes {
  team?: string;
}

interface Fighter {
  attributes: FighterAttributes;
}

interface Team {
  name: string;
  slug: string;
}

export default function Index() {
  const { t } = useTranslation();

  const [fighters, setFighters] = useState([]);
  const [teams, setTeams] = useState<Team[]>([]);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("teams", teams);
  }, [teams]);

  const manageFighters = async (_data: any) => {
    let _teams: Team[] = _data
      .map((f: Fighter): Team | null => {
        if (!f.attributes.team) return null;
        return {
          name: f.attributes.team,
          slug: f.attributes.team,
        };
      })
      .filter((d: any): d is Team => d !== null);

    _teams = _teams.flat();

    _teams = _teams.filter(
      (d, index, self) => index === self.findIndex((t) => t.slug === d.slug)
    );

    _teams.forEach((d) => {
      d["fighters"] = _data.filter((f: any) => {
        return f.attributes.team === d.slug;
      });
    });

    _teams = _teams.filter((t) => (t.fighters?.length ?? 0) > 0);

    let defTeams: Record<string, Team> = {};

    _teams.forEach((t) => {
      defTeams[t.slug?.toUpperCase()?.trim()] =
        defTeams[t.slug?.toUpperCase()?.trim()];

      if (!defTeams[t.slug?.toUpperCase()?.trim()]) {
        defTeams[t.slug?.toUpperCase()?.trim()] = t;
      } else {
        defTeams[t.slug?.toUpperCase()?.trim()].fighters = [
          ...(defTeams[t.slug?.toUpperCase()?.trim()].fighters || []),
          ...(t.fighters || []),
        ];
      }
    });

    setTeams(Object.values(defTeams));
  };

  useEffect(() => {
    (async () => {
      const response = await retrieveFighters();
      manageFighters(response);
      setFighters(response);
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
      }}
    >
      <ScrollView
        key={"home"}
        contentContainerStyle={{
          paddingBottom: 160,
        }}
      >
        <SubHeading invert={true} title={t("home.title")} subtitle={t("home.subtitle")} />
        <View style={[styles.p20h]}>
          <Widget />
        </View>
        <SubHeading invert={true} title={t("home.atleti")} subtitle={t("home.atletiSub")} />

        <Box
          style={[
            styles.p20w,
            {
              backgroundColor: "#111",
            },
          ]}
        >
          <ScrollView
            horizontal
            style={[styles.p20h]}
            showsHorizontalScrollIndicator={false}
          >
            {fighters
              .filter((f: any) => f.attributes?.fullname)
              .map((item: any, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={async () => {
                    await dispatch(setCurrentFigher(item));
                    router.push("pass");
                  }}
                >
                  <VerticalCard
                    title={item?.attributes?.fullname}
                    subtitle={
                      item?.attributes?.disciplineClass +
                      " - " +
                      (item?.attributes?.disciplines?.data?.length > 0
                        ? item?.attributes?.disciplines.data[0]?.attributes
                            ?.type +
                          " " +
                          item?.attributes?.disciplines.data[0]?.attributes
                            ?.name
                        : "")
                    }
                    price={item?.attributes?.age}
                    image={
                      item?.attributes?.picture?.data?.attributes?.url
                        ? "https://rankx.bkt.studio" +
                          item?.attributes?.picture?.data?.attributes?.url
                        : ""
                    }
                    style={{
                      backgroundColor: "#111",
                    }}
                  />
                </TouchableOpacity>
              ))}
          </ScrollView>
        </Box>

        <SubHeading invert={true} title={"TEAMS"} subtitle={"Tutti i team di RankX"} />


        {teams.map((item: any, index) => (
          <Accordion
            title={item.name?.toUpperCase()}
            open={index === 0}
            items={item.fighters}
          ></Accordion>
        ))}

        {/* {places && (
          <View>
            <Box style={[]}>
              <Heading title={t("home.visit") + " "} />
            </Box>
            <Gallery
              data={places}
              ctaLabel={t("home.discoverPass")}
              title="title"
              ctaCallback={async (item: any) => {
                await dispatch(setCurrentPlace(item));
                router.push(`places/${item.title}`);
              }}
            />
            <Text style={[styles.Heading, styles.p20, styles.p10h]}>
              {t("home.underGallery")}
            </Text>
            <Box style={[]}>
              <Heading title={t("home.currentPromo") + " "} />
            </Box>
          </View>
        )} */}
      </ScrollView>
    </View>
  );
}
