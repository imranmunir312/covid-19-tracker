import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { fetchAllCountriesName } from "../api/index";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CountrySelector({ selectedCountry, handleChange }) {
  const classes = useStyles();
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCountriesList(await fetchAllCountriesName());
    };

    fetchData();
  }, []);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Select Country
        </InputLabel>
        <NativeSelect
          value={selectedCountry}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
          inputProps={{
            name: "Select Country",
            id: "age-native-label-placeholder",
          }}
        >
          {countriesList.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Countries List</FormHelperText>
      </FormControl>
    </div>
  );
}
