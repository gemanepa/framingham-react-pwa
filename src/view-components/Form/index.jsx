import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import { checkboxes, selects } from './data';

const useStyles = makeStyles((theme) => ({
  defaultFormControl: {
    margin: theme.spacing(1),
    minWidth: '16.9vw',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  cholesterolFormControls: {
    margin: theme.spacing(1),
    minWidth: '11vw',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  calcButton: {
    margin: theme.spacing(1),
    width: window.innerWidth > 1199 ? '40%' : null,
    backgroundColor: '#4689c8',
    '&:hover': {
      background: '#005c97',
    },
  },
  resetButton: {
    margin: theme.spacing(1),
    backgroundColor: '#4689c8',
    '&:hover': {
      background: 'red',
    },
  },
}));


export default function Form(props) {
  const { translations, previousData } = props;
  const classes = useStyles();

  // Validations
  const [errors, setErrors] = React.useState({
    gender: false,
    age: false,
    hdl: false,
    ldl: false,
    totaldl: false,
    ta: false,
    wt: false,
  });

  // Selects logic
  const [selectsVals, setSelectsVals] = !previousData ? React.useState({ }) : React.useState({
    age: previousData.age,
    hdl: previousData.hdl,
    ldl: previousData.ldl,
    totaldl: previousData.totaldl,
    ta: previousData.ta,
    wt: previousData.wt,
  });
  const handleSelectChange = (event) => {
    setErrors({ ...errors, [event.target.name]: false });
    setSelectsVals((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };


  // Radio logic
  const [radioVal, setRadioVal] = !previousData ? React.useState('undefined') : React.useState(previousData.gender);
  function handleRadioChange(event) {
    setErrors({ ...errors, gender: false });
    setRadioVal(event.target.value);
    setSelectsVals((oldValues) => ({
      ...oldValues,
      wt: undefined,
    }));
  }


  // Checkbox Logic
  const [checkboxVals, setCheckboxState] = !previousData
    ? React.useState({
      smoking: false,
      diabetes: false,
      hypertension_in_treatment: false,
    }) : React.useState({
      smoking: previousData.smoking,
      diabetes: previousData.diabetes,
      hypertension_in_treatment: previousData.treatment,
    });
  const handleCheckboxChange = (name) => (event) => {
    setCheckboxState({ ...checkboxVals, [name]: event.target.checked });
  };

  function validateSubmittedData(requiredData, nonrequiredData) {
    // Required data
    const failedVal = {};
    Object.keys(requiredData).forEach((key) => {
      if (requiredData[key] && requiredData[key] !== 'undefined') {
        failedVal[key] = false;
      } else { failedVal[key] = true; }
    });
    const falsyValues = Object.values(failedVal).filter((val) => val === true);

    if (falsyValues.length > 0) { setErrors({ ...failedVal }); return false; }

    // Non-required data
    const nonrequiredVals = Object.values(nonrequiredData).filter((val) => typeof val !== 'boolean');
    if (nonrequiredVals.length > 0) return false;


    return true;
  }
  function resetButtonHandler() {
    setRadioVal('undefined');
    setSelectsVals(() => ({
      age: undefined,
      hdl: undefined,
      ldl: undefined,
      totaldl: undefined,
      ta: undefined,
      wt: undefined,
    }));
    setCheckboxState({
      ...checkboxVals, smoking: false, diabetes: false, hypertension_in_treatment: false,
    });
    setErrors({
      gender: false,
      age: false,
      hdl: false,
      ldl: false,
      totaldl: false,
      ta: false,
      wt: false,
    });
    props.cleanCalcInputs();
  }

  function calcButtonHandler() {
    const requiredData = {
      gender: radioVal,
      age: selectsVals.age,
      hdl: selectsVals.hdl,
      ldl: selectsVals.ldl,
      totaldl: selectsVals.totaldl,
      ta: selectsVals.ta,
      wt: selectsVals.wt,
    };
    const nonrequiredData = {
      diabetes: checkboxVals.diabetes,
      smoking: checkboxVals.smoking,
      treatment: checkboxVals.hypertension_in_treatment,
    };
    const allData = {
      ...requiredData,
      ...nonrequiredData,
    };

    if (validateSubmittedData(requiredData, nonrequiredData)) {
      props.datasubmittedHandler(allData, translations.calc);
    }
  }

  return (
    <>
      <form autoComplete="off">

        <FormControl component="fieldset" className={classes.defaultFormControl} error={errors.gender}>
          <FormLabel component="legend">{translations.gender}</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={radioVal}
            onChange={(event) => handleRadioChange(event)}
            row
          >
            <div className={errors.gender ? 'error' : ''}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label={translations.woman}
                data-test="Form_gender_female"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label={translations.man}
                data-test="Form_gender_male"
              />
            </div>

          </RadioGroup>
        </FormControl>
        {selects.map((select) => (
          <React.Fragment key={`select-${select.name}-container`}>
            <FormControl
              className={(!select.label.includes('colesterol') && window.innerWidth > 1199)
                ? classes.defaultFormControl : classes.cholesterolFormControls}
              error={errors[select.name]}
              key={`select-${select.name}-formcontrol`}
            >
              <InputLabel
                htmlFor={select.name}
                data-test={`Form_label_${select.name}`}
              >
                {translations[select.label]}
              </InputLabel>
              <Select
                value={selectsVals[select.name] ? selectsVals[select.name] : ''}
                onChange={handleSelectChange}
                inputProps={{
                  name: select.name,
                  id: select.name,
                }}
                data-test={`Form_${select.name}Select`}
                MenuProps={{ disableScrollLock: true }}
              >

                {select.name !== 'wt' && select.values.map((val) => (
                  <MenuItem
                    value={val}
                    key={`select-${select.name}-menuitem-${val}`}
                    data-test={`Form_${select.name}_${val.replace(/ /g, '')}`}
                  >
                    {val}
                  </MenuItem>
                ))}


                {select.name === 'wt' && select.values[radioVal].map((val) => (
                  <MenuItem
                    value={val || 'undefined'}
                    key={`select-${select.name}-menuitem-${val}`}
                    data-test={`Form_${select.name}_${val.replace(/ /g, '')
                    || translations.genderRequired.replace(/ /g, '')}`}
                  >
                    {val || translations.genderRequired}
                  </MenuItem>
                ))}


              </Select>
              {select.helper && <FormHelperText>{translations.helpers[select.helper]}</FormHelperText>}
            </FormControl>

            {(select.name === 'age' || select.name === 'totaldl' || select.name === 'wt')
            && <br className="desktopOnly" />}
          </React.Fragment>
        ))}

        <FormGroup
          column={`${window.innerWidth > 1200}`}
          row={window.innerWidth > 1200}
          style={window.innerWidth > 1200
            ? { display: 'flex', justifyContent: 'space-between', marginTop: '3vh' }
            : { marginTop: '20px', marginBottom: '20px' }}
        >
          {checkboxes.map((checkbox) => (
            <FormControlLabel
              control={(
                <Checkbox
                  onChange={handleCheckboxChange(checkbox.checkboxKey)}
                  checked={checkboxVals[checkbox.checkboxKey]}
                />
              )}
              label={translations[checkbox.checkboxKey]}
              key={`checkbox-${checkbox.checkboxKey}-label`}
              data-test={`Form_${checkbox.checkboxKey}Checkbox`}
              className="checkboxDefault"
              style={window.innerWidth > 1200 ? {
                width: 'auto',
                maxWidth: '32.25%',
                marginRight: checkbox.checkboxKey !== 'smoking' ? '8%' : '5%',
                marginLeft: checkbox.checkboxKey !== 'smoking' ? null : '-10%',
              } : null}
            />
          ))}
        </FormGroup>
        <br />

        <div className="formbuttons">
          <Button
            onClick={resetButtonHandler}
            variant="contained"
            color="secondary"
            className={classes.resetButton}
            data-test="Form_ResetButton"
          >
            <DeleteIcon />
          </Button>

          <Button
            onClick={calcButtonHandler}
            variant="contained"
            color="primary"
            className={classes.calcButton}
            data-test="Form_SendButton"
          >
            <SendIcon />
          </Button>
        </div>
      </form>
      <style jsx>
        {`
      .formbuttons {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
      }
      .error {
        color: #ff1744;
      }

      @media (max-width: 1199px) {
        .desktopOnly {
          display: none;
        }
        form {
          display:flex;
          flex-direction: column;
          justify-content: center;
        }
        form div {
          justify-content: center;
        }
        .formbuttons {
          display: flex;
          flex-direction: column-reverse;
        }
      }

      @media (min-width: 1200px) {
        form {
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          padding-left: 5%
        }
      }
    `}
      </style>
    </>
  );
}

Form.propTypes = {
  datasubmittedHandler: PropTypes.func.isRequired,
  cleanCalcInputs: PropTypes.func.isRequired,
  translations: PropTypes.exact({
    age: PropTypes.string.isRequired,
    arterial_pression: PropTypes.string.isRequired,
    colesterol_hdl: PropTypes.string.isRequired,
    colesterol_ldl: PropTypes.string.isRequired,
    colesterol_total: PropTypes.string.isRequired,
    diabetes: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    genderRequired: PropTypes.string.isRequired,
    hypertension_in_treatment: PropTypes.string.isRequired,
    man: PropTypes.string.isRequired,
    risk_score_calculator: PropTypes.string.isRequired,
    smoking: PropTypes.string.isRequired,
    waist_circumference: PropTypes.string.isRequired,
    woman: PropTypes.string.isRequired,
    using_guidelines: PropTypes.string.isRequired,
    calc: PropTypes.exact({
      abdominal_aortic_aneurysm: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      alternative_target: PropTypes.string.isRequired,
      aterosclerosis: PropTypes.string.isRequired,
      chronic_kidney_disease: PropTypes.string.isRequired,
      decrease_in: PropTypes.string.isRequired,
      diabetes: PropTypes.string.isRequired,
      high: PropTypes.string.isRequired,
      intermediate: PropTypes.string.isRequired,
      low: PropTypes.string.isRequired,
      or: PropTypes.string.isRequired,
      patient_highly_requires_treatment: PropTypes.string.isRequired,
      patient_not_requires_treatment: PropTypes.string.isRequired,
      primary_target: PropTypes.string.isRequired,
      smoking: PropTypes.string.isRequired,
      so_treatment_is_recommended: PropTypes.string.isRequired,
      statins_only_indicated: PropTypes.string.isRequired,
      treatment_intermediate_hasfactors: PropTypes.string.isRequired,
      treatment_intermediate_ldl: PropTypes.string.isRequired,
      treatment_intermediate_norisks: PropTypes.string.isRequired,
      treatment_low_diabetes: PropTypes.string.isRequired,
      unknown: PropTypes.string.isRequired,
      waist_circumference: PropTypes.string.isRequired,
      years: PropTypes.string.isRequired
    }).isRequired,
    helpers: PropTypes.exact({
      'cms(inches)': PropTypes.string.isRequired,
      mgdl: PropTypes.string.isRequired,
      mmHg: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  previousData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
};
