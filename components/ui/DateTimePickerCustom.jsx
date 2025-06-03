import { useState } from "react";
import { Platform, TouchableOpacity, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

export default function DateTimeInput({ value, onChange, placeholder }) {
  const [show, setShow] = useState(false);

  const handleChange = (selectedDate) => {
    setShow(false);
    onChange(selectedDate);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: "#ccc",
          backgroundColor: "#fff",
        }}
      >
        <Text>
          {value
            ? moment(value).format("DD/MM/YYYY HH:mm")
            : placeholder || "Seleziona data e ora"}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePickerModal
          isVisible={show}
          mode="datetime"
          onConfirm={handleChange}
          onCancel={() => setShow(false)}
        />
      )}
    </View>
  );
}
