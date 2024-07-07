import React, { useState } from "react";
import Select from "react-select";
import timezoneData from "./timezone-data"; // Assume this is a module containing timezone data.

const timeZoneObjectToString = (tz: ITimeZone | null) =>
  tz === null ? "" : `${tz.name}${tz.utc}`;

const options = timezoneData.map((tz: ITimeZone) => ({
  value: tz,
  label: timeZoneObjectToString(tz),
}));

export interface ITimeZone {
  zone: string;
  utc: string;
  name: string;
}
interface TimezonePickerProps {
  newTimeZone: (tz: ITimeZone | null) => void;
}

const TimezonePicker: React.FC<TimezonePickerProps> = ({ newTimeZone }) => {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimeZone | null>(
    null
  );
  // useImperativeHandle(ref, () => ({
  //   getValue: () => timeZoneObjectToString(selectedTimezone),
  // }));
  const handleChange = (option: { value: ITimeZone; label: string } | null) => {
    setSelectedTimezone(option ? option.value : null);
    newTimeZone(option ? option.value : null);
  };

  return (
    <div style={{ left: "0px" }}>
      <label htmlFor="timezone">Select Timezone: </label>
      <Select
        id="timezone"
        options={options}
        value={options.find((option) => option.value === selectedTimezone)}
        onChange={handleChange}
      />
      {selectedTimezone && (
        <div>Selected Timezone: {timeZoneObjectToString(selectedTimezone)}</div>
      )}
    </div>
  );
};
export interface ChildRef {
  getValue: () => string;
}
export default TimezonePicker;
