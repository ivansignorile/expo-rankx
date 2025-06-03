import { Controller, useForm } from "react-hook-form";
import { Platform, Switch, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";
import styles from "@/utils/css";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { Picker } from "@react-native-picker/picker";
import DateTimeInput from "./DateTimePickerCustom";
import { Button, Plain } from "../ui/Buttons";
import "moment/locale/it"; // Importa la localizzazione italiana
import RNDateTimePicker from "@react-native-community/datetimepicker";
moment.locale("it"); // Imposta la localizzazione italiana
export default function Form({
  formData,
  error,
  hideConfirmButton,
  triggerObject,
  triggerOptions,
}) {
  const [opts, setTriggerOptions] = useState();
  const _defaultValues = formData.fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue;
    return acc;
  }, {});

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: _defaultValues,
  });
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [modalLabel, setModalLabel] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);
  useEffect(() => {
    if (formData?.fields) {
      formData.fields.forEach((field) => {
        if (field.defaultValue) {
          setValue(field.name, field.defaultValue);
        }
      });
    }
  }, []);

  const replaceAllOccurrencies = (string, search, replace) => {
    try {
      return string.split(search).join(replace);
    } catch (err) {
      return string;
    }
  };

  useEffect(() => {
    triggerOptions && setTriggerOptions(triggerOptions);
  }, [triggerOptions]);

  useEffect(() => {
    triggerObject && setValue(triggerObject?.name, triggerObject?.value);
  }, [triggerObject]);

  const onSubmit = (data) => {
    formData?.onSubmit(data);
  };
  return (
    <>
      <View style={!hideConfirmButton ? styles.mt10 : { paddingBottom: 20 }}>
        {formData.fields.map((field, index) => {
          const {
            type,
            required,
            name,
            placeholder,
            label,
            onCustomChange,
            textArea,
            keepOnSubmit,
            autoSubmit,
          } = field;
          return (
            <Controller
              control={control}
              rules={{
                required,
              }}
              key={`field-${index}`}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  {type !== "checkbox" && (
                    <Text
                      allowFontScaling={false}
                      style={[styles.BodyS, styles.mb5, styles.BodyL]}
                    >
                      {label}
                    </Text>
                  )}

                  {type === "select" && (
                    <View
                      style={[
                        styles.input,
                        {
                          padding: 0,
                          height: Platform.OS === "ios" ? 200 : 80,
                        },
                      ]}
                    >
                      <Picker
                        selectedValue={value}
                        style={{
                          width: "100%",
                          height: Platform.OS === "ios" ? 200 : 80,
                          marginTop: "-3",
                        }}
                        itemStyle={{
                          color: "#111",
                          fontSize: 14,
                        }}
                        onValueChange={(itemValue, itemIndex) =>
                          setValue(name, itemValue)
                        }
                        allowFontScaling={false}
                      >
                        <Picker.Item
                          allowFontScaling={false}
                          label={placeholder}
                          value=""
                        />
                        {field.options.map((option, index) => (
                          <Picker.Item
                            allowFontScaling={false}
                            key={`option-${index}`}
                            label={option.label}
                            value={option.value}
                          />
                        ))}

                        {opts &&
                          opts?.name === name &&
                          opts?.value?.map((option, index) => (
                            <Picker.Item
                              allowFontScaling={false}
                              key={`option-${index}`}
                              label={option.label}
                              value={option.value}
                            />
                          ))}
                      </Picker>
                    </View>
                  )}
                  {type === "datetime" && (
                    <>
                      {Platform.OS === "ios" ? (
                        <RNDateTimePicker
                          mode="datetime"
                          value={value ? new Date(value) : new Date()}
                          display={
                            Platform.OS === "ios" ? "default" : "spinner"
                          }
                          design="material"
                          style={{
                            flex: 1,
                            color: "red",
                            marginVertical: 10,
                          }}
                          onChange={(event, selectedDate) => {
                            setValue(name, selectedDate);
                          }}
                        />
                      ) : (
                        <>
                          <DateTimeInput
                            value={value}
                            onChange={(selectedDate) =>
                              setValue(name, selectedDate)
                            }
                            placeholder={placeholder}
                          />
                        </>
                      )}
                    </>
                  )}

                  {type === "date" && (
                    <>
                      <TextInput
                        allowFontScaling={false}
                        placeholderTextColor={"#999"}
                        style={[styles.input]}
                        placeholder={`${required && "*"}${placeholder}`}
                        onBlur={onBlur}
                        onChangeText={(e) => {
                          const transformedDate = replaceAllOccurrencies(
                            e,
                            "/",
                            ""
                          );

                          if (transformedDate?.length <= 8) {
                            if (transformedDate?.length % 2 === 0) {
                              // ogni due caratteri inserisce uno slash, tranne che per l'anno
                              const date = transformedDate
                                .split("")
                                .map((char, index) => {
                                  if (index === 1 || index === 3) {
                                    return char + "/";
                                  }
                                  return char;
                                })
                                .join("");
                              setValue(
                                name,
                                moment(date, "DD/MM/YYYY").format("YYYY-MM-DD")
                              );
                              onChange(date);
                            } else {
                              onChange(e);
                            }
                          } else {
                            onChange(e);
                          }
                        }}
                        value={value}
                        secureTextEntry={type === "password"}
                        keyboardAppearance="dark"
                        keyboardType={"phone-pad"}
                      />
                    </>
                  )}
                  {type === "checkbox" ? (
                    <View
                      style={[
                        styles.inlineFlex,
                        styles.mt10,
                        styles.mb20,
                        {
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: 10,
                          width: "100%",
                        },
                      ]}
                    >
                      <Switch
                        trackColor={{
                          false: Colors.primaryLight,
                          true: Colors.primary,
                        }}
                        thumbColor={value ? "#fff" : "#f4f3f4"}
                        ios_backgroundColor={"#eee"}
                        onValueChange={onChange}
                        value={value}
                      />
                      <Text
                        style={[
                          styles.BodyS,
                          {
                            width: "50%",
                          },
                        ]}
                      >
                        {label}
                      </Text>
                    </View>
                  ) : (
                    !["date", "select", "datetime"].includes(type) && (
                      <View>
                        <TextInput
                          allowFontScaling={false}
                          placeholderTextColor={"#999"}
                          style={[
                            styles.input,
                            {
                              textAlignVertical: textArea ? "top" : "center",
                              borderRadius: hideConfirmButton ? 200 : 10,
                              paddingHorizontal: hideConfirmButton ? 20 : 10,
                              marginBottom: field.helperLink ? 0 : 30,
                            },
                          ]}
                          placeholder={`${required && "*"}${placeholder}`}
                          onBlur={onBlur}
                          onChangeText={(e) => {
                            onChange(e);
                            onCustomChange && onCustomChange(e);
                          }}
                          value={value}
                          secureTextEntry={type === "password"}
                          capitalize="none"
                          keyboardAppearance="dark"
                          returnKeyType={hideConfirmButton ? "send" : "next"}
                          onSubmitEditing={() => {
                            if (hideConfirmButton) {
                              handleSubmit(onSubmit)();
                              if (!keepOnSubmit) {
                                setValue(name, "");
                              }
                            }
                          }}
                          keyboardType={
                            hideConfirmButton
                              ? "default"
                              : type === "email"
                              ? "email-address"
                              : "default"
                          }
                        />
                        {autoSubmit && (
                          <Button
                            style={{
                              position: "absolute",
                              right: 20,
                              top: 12.5,
                            }}
                            onPress={() => {
                              handleSubmit(onSubmit)();
                              if (!keepOnSubmit) {
                                setValue(name, "");
                              }
                            }}
                            title={autoSubmit}
                          ></Button>
                        )}
                      </View>
                    )
                  )}
                  {field.helperLink && (
                    <Plain
                      title={field.helperLink.label}
                      onPress={field.helperLink.onPress}
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      style={[
                        {
                          width: "100%",
                          padding: 0,
                          marginBottom: 20,
                        },
                      ]}
                    />
                  )}

                  {errors[name] && (
                    <Text
                      allowFontScaling={false}
                      style={[styles.BodyS, styles.error, styles.mb10]}
                    >
                      Campo obbligatorio o non valido
                    </Text>
                  )}
                </>
              )}
              name={name}
            />
          );
        })}

        {error && (
          <Text
            allowFontScaling={false}
            style={[styles.BodyS, styles.error, styles.mb10]}
          >
            Si è verificato un errore, ricontrolla i dati inseriti
          </Text>
        )}
        <View
          style={[
            styles.inlineFlex,
            {
              gap: 10,
            },
          ]}
        >
          {!hideConfirmButton && (
            <Button
              onPress={handleSubmit(onSubmit)}
              style={[]}
              half={formData?.secondaryAction ? true : false}
              title={formData.actionLabel}
            ></Button>
          )}

          {formData?.secondaryAction && (
            <Button
              onPress={formData.secondaryAction.onPress}
              half
              title={formData.secondaryAction.label}
              style={[
                styles.bgTransparent,
                styles.mb30,
                {
                  borderColor: "#fff",
                },
              ]}
            ></Button>
          )}
        </View>
        {formData?.helperLink && (
          <Plain
            title={formData?.helperLink.label}
            onPress={formData?.helperLink.onPress}
            alignItems="flex-start"
            justifyContent="flex-start"
            style={[
              {
                width: "100%",
                padding: 0,
                marginBottom: 20,
              },
            ]}
          />
        )}
      </View>
    </>
  );
}
