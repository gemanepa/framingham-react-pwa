import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinkIcon from '@material-ui/icons/Link';
import Paper from '@material-ui/core/Paper';
import Form from '../../Form';

export default function CalcInput(props) {
  const [animationClass, setAnimationClass] = useState('opening-animation');
  const {
    classes, cleanCalcInputs, datasubmittedHandler, formData, translations
  } = props;

  function datasubmittedAnimationMiddleware(data, trnslations) {
    setAnimationClass('closing-animation');
    datasubmittedHandler(data, trnslations);
  }

  return (
    <>
      <section id="calcinput" className={animationClass} data-test="CalcInput_Container">
        <Paper className={`${window.innerWidth > 1199 ? classes.paperDesktop : classes.paperMobile} `}>
          <h2 data-test="CalcInput_Header">{translations.risk_score_calculator}</h2>
          <h5>
            <a
              href="https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-test="CalcInput_elinkCCS"
            >
              {translations.using_guidelines}
              <LinkIcon fontSize="small" />
            </a>
          </h5>
          <Form
            datasubmittedHandler={datasubmittedAnimationMiddleware}
            cleanCalcInputs={cleanCalcInputs}
            translations={translations}
            previousData={formData}
          />
        </Paper>
      </section>
      <style jsx>
        {`
            section#calcinput h2 {
              color: #4689C8;
              text-align: center;
              margin: 0;
              font-weight: 600;
              text-shadow: 1px 1px #4689c8;
              font-size: 200%;
            }
  
            section#calcinput h3 {
                color: #4689C8;
                font-weight: 600;
                font-size: 170%;
            }
  
            section#calcinput h5 {
                margin-top: 0px;
                color: #4689C8;
                text-align: center;
                font-weight: 600;
            }
            
            @media (min-width: 1200px) {
              section#calcinput h2 {
                  margin-bottom: -1.5%;
                  font-size: 2.05vw;
              }

              section#calcinput h5 {
                font-size: 0.85vw; 
              }
            }
  
            @keyframes flipOutX {
                from {
                  transform: perspective(400px);
                }
              
                30% {
                  transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
                  opacity: 1;
                }
              
                to {
                  transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
                  opacity: 0;
                }
              }
            
            @keyframes flipInX {
              from {
                transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
                animation-timing-function: ease-in;
                opacity: 0;
              }
            
              40% {
                transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
                animation-timing-function: ease-in;
              }
            
              60% {
                transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
                opacity: 1;
              }
            
              80% {
                transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
              }
            
              to {
                transform: perspective(400px);
              }
            }
  
            .opening-animation {
              backface-visibility: visible !important;
              animation-name: flipInX;
              animation-fill-mode: forwards;
              animation-duration: 0.75s;
            }
  
            .closing-animation {
              animation-fill-mode: forwards;
              animation-name: flipOutX;
              animation-duration: 0.50s;
              backface-visibility: visible !important;
            }
        `}
      </style>
    </>
  );
}

CalcInput.propTypes = {
  classes: PropTypes.exact({
    button: PropTypes.string.isRequired,
    paperDesktop: PropTypes.string.isRequired,
    paperMobile: PropTypes.string.isRequired,
  }).isRequired,
  cleanCalcInputs: PropTypes.func.isRequired,
  datasubmittedHandler: PropTypes.func.isRequired,
  formData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
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
  }).isRequired
};
