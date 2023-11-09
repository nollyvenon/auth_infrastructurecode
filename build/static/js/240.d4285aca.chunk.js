"use strict";(self.webpackChunkavas_auth=self.webpackChunkavas_auth||[]).push([[240],{1314:function(e,n,o){o.d(n,{Z:function(){return c}});var a=o(7313),t=o(5968),r=o(3451),i=o(2704),l=o.n(i),s=o(6417),c=function(e){var n=e.code;return(0,a.useEffect)((function(){new(l())(".copy-button").on("success",(function(e){e.clearSelection(),alert("Code copied to clipboard!")}))}),[]),(0,s.jsxs)("div",{className:"chat-bubble",children:[(0,s.jsx)("div",{className:"code-container",children:(0,s.jsx)(t.Z,{language:"javascript",style:r.Z,showLineNumbers:!0,children:n})}),(0,s.jsx)("button",{className:"copy-button","data-clipboard-text":n,children:"Copy Code"})]})}},240:function(e,n,o){var a=o(1413),t=o(6459),r=o(7313),i=o(9860),l=o(7829),s=o(9099),c=o(8089),d=o(7410),u=o(8692),h=o.n(u),f=o(6417);n.Z=function(e){var n,o=Object.assign({},((0,t.Z)(e),e));(0,i.Z)();(0,r.useEffect)((function(){n=new(h())("fioa403c")}),[]);var u=function(){n.authenticate({locale:"auto"}).then((function(e){console.log("Success, user identified"),console.log("Linked facial Id: "+e.facialId),console.log("Payload: "+JSON.stringify(e.payload))})).catch((function(e){console.log(e),g(e)}))},m=function(){n.enroll({locale:"auto",payload:{whoami:123456,email:"john.doe@example.com",gender:""}}).then((function(e){alert("User Successfully Enrolled! Details:\n                  Unique Facial ID: ".concat(e.facialId,"\n                  Enrollment Date: ").concat(e.timestamp,"\n                  Gender: ").concat(e.details.gender,"\n                  Age Approximation: ").concat(e.details.age)),console.log(e)})).catch((function(e){console.log(e),g(e)}))};function g(e){var o=n.fetchAllErrorCodes();switch(e){case o.PERMISSION_REFUSED:console.log("Access to the Camera stream was denied by the end user");break;case o.NO_FACES_DETECTED:console.log("No faces were detected during the enroll or authentication process");break;case o.UNRECOGNIZED_FACE:console.log("Unrecognized face on this application's Facial Index");break;case o.MANY_FACES:console.log("Two or more faces were detected during the scan process");break;case o.FACE_DUPLICATION:console.log("User enrolled previously (facial features already recorded). Cannot enroll again!");break;case o.MINORS_NOT_ALLOWED:console.log("Minors are not allowed to enroll on this application!");break;case o.PAD_ATTACK:console.log("Presentation (Spoof) Attack (PAD) detected during the scan process");break;case o.FACE_MISMATCH:console.log("Calculated Facial Vectors of the user being enrolled do not matches");break;case o.WRONG_PIN_CODE:console.log("Wrong PIN code supplied by the user being authenticated")}}return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{alignItems:"center",display:"flex",mt:2,children:(0,f.jsx)("h4",{className:"text-2xl font-bold mb-4",children:"FaceRecognition Module"})}),(0,f.jsx)(d.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:c.Ry().shape({email:c.Z_().email("Must be a valid email").max(255).required("Email is required"),password:c.Z_().max(255).required("Password is required")}),children:function(e){var n=e.handleSubmit;e.isSubmitting;return(0,f.jsxs)("form",(0,a.Z)((0,a.Z)({noValidate:!0,onSubmit:n},o),{},{children:[(0,f.jsx)(l.Z,{mt:2,children:(0,f.jsx)(s.Z,{color:"secondary",onClick:m,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register User"})}),(0,f.jsx)(l.Z,{mt:2,children:(0,f.jsx)(s.Z,{color:"primary",onClick:u,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Log In"})})]}))}})]})}},8240:function(e,n,o){o.r(n),o.d(n,{default:function(){return I}});var a=o(7313),t=o(2135),r=o(9860),i=o(9019),l=o(3428),s=o(3405),c=o(240),d=o(1413),u=o(6459),h=o(7829),f=o(9099),m=o(8089),g=o(7410),p=o(8692),b=o.n(p),x=o(6417),E=function(e){var n,o=Object.assign({},((0,u.Z)(e),e));(0,a.useEffect)((function(){n=new(b())("fioa403c")}),[]);var t=function(){n.authenticate({locale:"auto"}).then((function(e){console.log("Success, user identified"),console.log("Linked facial Id: "+e.facialId),console.log("Payload: "+JSON.stringify(e.payload))})).catch((function(e){console.log(e),i(e)}))},r=function(){n.enroll({locale:"auto",payload:{whoami:123456,email:"john.doe@example.com",gender:""}}).then((function(e){alert("User Successfully Enrolled! Details:\n                  Unique Facial ID: ".concat(e.facialId,"\n                  Enrollment Date: ").concat(e.timestamp,"\n                  Gender: ").concat(e.details.gender,"\n                  Age Approximation: ").concat(e.details.age)),console.log(e)})).catch((function(e){console.log(e),i(e)}))};function i(e){var o=n.fetchAllErrorCodes();switch(e){case o.PERMISSION_REFUSED:console.log("Access to the Camera stream was denied by the end user");break;case o.NO_FACES_DETECTED:console.log("No faces were detected during the enroll or authentication process");break;case o.UNRECOGNIZED_FACE:console.log("Unrecognized face on this application's Facial Index");break;case o.MANY_FACES:console.log("Two or more faces were detected during the scan process");break;case o.FACE_DUPLICATION:console.log("User enrolled previously (facial features already recorded). Cannot enroll again!");break;case o.MINORS_NOT_ALLOWED:console.log("Minors are not allowed to enroll on this application!");break;case o.PAD_ATTACK:console.log("Presentation (Spoof) Attack (PAD) detected during the scan process");break;case o.FACE_MISMATCH:console.log("Calculated Facial Vectors of the user being enrolled do not matches");break;case o.WRONG_PIN_CODE:console.log("Wrong PIN code supplied by the user being authenticated")}}return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.Z,{alignItems:"center",display:"flex",mt:2,children:(0,x.jsx)("h4",{className:"text-2xl font-bold mb-4",children:"FaceRecognition Module"})}),(0,x.jsx)("textarea",{children:(0,x.jsx)("code",{children:(0,x.jsx)(g.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:m.Ry().shape({email:m.Z_().email("Must be a valid email").max(255).required("Email is required"),password:m.Z_().max(255).required("Password is required")}),children:function(e){var n=e.handleSubmit;e.isSubmitting;return(0,x.jsxs)("form",(0,d.Z)((0,d.Z)({noValidate:!0,onSubmit:n},o),{},{children:[(0,x.jsx)(h.Z,{mt:2,children:(0,x.jsx)(f.Z,{color:"secondary",onClick:r,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register User"})}),(0,x.jsx)(h.Z,{mt:2,children:(0,x.jsx)(f.Z,{color:"primary",onClick:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Log In"})})]}))}})})})]})},C=o(4427),y=o(1314),I=function(){var e=(0,r.Z)();return(0,x.jsxs)(i.ZP,{container:!0,justifyContent:"space-evenly",alignItems:"center",sx:{backgroundColor:e.palette.common.black,height:"100%",minHeight:"100vh"},children:[(0,x.jsx)(i.ZP,{item:!0,xs:11,sm:7,md:6,lg:5,children:(0,x.jsx)(l.Z,{sx:{overflow:"visible",display:"flex",position:"relative","& .MuiCardContent-root":{flexGrow:1,flexBasis:"50%",width:"50%"},maxWidth:"90%",margin:"24px auto"},children:(0,x.jsx)(s.Z,{sx:{p:e.spacing(5,4,3,4)},children:(0,x.jsxs)(i.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"center",children:[(0,x.jsx)(i.ZP,{item:!0,xs:12,children:(0,x.jsx)(i.ZP,{container:!0,justifyContent:"space-between",children:(0,x.jsx)(i.ZP,{item:!0,children:(0,x.jsx)(t.rU,{to:"/",children:(0,x.jsx)("img",{alt:"Auth method",src:C})})})})}),(0,x.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,x.jsx)(c.Z,{})}),(0,x.jsx)(i.ZP,{item:!0,xs:6,children:(0,x.jsx)(E,{})})]})})})}),(0,x.jsx)(i.ZP,{item:!0,xs:11,sm:7,md:6,lg:5,children:(0,x.jsx)(y.Z,{code:"import React, { useEffect } from 'react';\n\n  // material-ui\n  import { Box, Button } from '@mui/material';\n  \n  //  third party\n  import * as Yup from 'yup';\n  import { Formik } from 'formik';\n  \n  // assets\n  import faceIO from '@faceio/fiojs';\n  \n  // ==============================|| FIREBASE LOGIN ||============================== //\n  \n  const FireFaceRecognitionCode = ({ ...rest }) => {\n    let faceio;\n  \n    useEffect(() => {\n      faceio = new faceIO('fioa403c');\n    }, []);\n  \n    const authenticateUser = () => {\n      faceio\n        .authenticate({\n          /* authentication options */\n          locale: 'auto' // Default user locale\n        })\n        .then((userData) => {\n          // Handle successful authentication\n          console.log('Success, user identified');\n          // Grab the facial ID linked to this particular user which will be same\n          // for each of his successful future authentication. FACEIO recommend\n          // that your rely on this Facial ID if you plan to uniquely identify\n          // all enrolled users on your backend for example.\n          console.log('Linked facial Id: ' + userData.facialId);\n          // Grab the arbitrary data you have already linked (if any) to this particular user\n          // during his enrollment via the payload parameter of the enroll() method.\n          console.log('Payload: ' + JSON.stringify(userData.payload));\n        })\n        .catch((errCode) => {\n          // handle authentication failure. Visit:\n          // https://faceio.net/integration-guide#error-codes\n          // for the list of all possible error codes\n  \n          console.log(errCode);\n          handleError(errCode);\n        });\n    };\n  \n    const enrollNewUser = () => {\n      faceio\n        .enroll({\n          /* enrollment options */\n          locale: 'auto', // Default user locale\n          payload: {\n            /* The payload we want to associate with this user\n             * which is forwarded back to us upon future\n             * authentication of this particular user.*/\n            whoami: 123456, // Example of dummy ID linked to this particular user\n            email: 'john.doe@example.com',\n            gender: ''\n          }\n        })\n        .then((userInfo) => {\n          // Handle successful enrollment\n          alert(\n            \"User Successfully Enrolled! Details:\n                  \"\n          );\n          console.log(userInfo);\n        })\n        .catch((errCode) => {\n          // handle enrollment failure. Visit:\n          // https://faceio.net/integration-guide#error-codes\n          // for the list of all possible error codes\n          console.log(errCode);\n          handleError(errCode);\n        });\n    };\n  \n    function handleError(errCode) {\n      // Handle error here\n      // Log all possible error codes during user interaction..\n      // Refer to: https://faceio.net/integration-guide#error-codes\n      // for a detailed overview when these errors are triggered.\n      const fioErrs = faceio.fetchAllErrorCodes();\n      switch (errCode) {\n        case fioErrs.PERMISSION_REFUSED:\n          console.log('Access to the Camera stream was denied by the end user');\n          break;\n        case fioErrs.NO_FACES_DETECTED:\n          console.log('No faces were detected during the enroll or authentication process');\n          break;\n        case fioErrs.UNRECOGNIZED_FACE:\n          console.log(\"Unrecognized face on this application's Facial Index\");\n          break;\n        case fioErrs.MANY_FACES:\n          console.log('Two or more faces were detected during the scan process');\n          break;\n        case fioErrs.FACE_DUPLICATION:\n          console.log('User enrolled previously (facial features already recorded). Cannot enroll again!');\n          break;\n        case fioErrs.MINORS_NOT_ALLOWED:\n          console.log('Minors are not allowed to enroll on this application!');\n          break;\n        case fioErrs.PAD_ATTACK:\n          console.log('Presentation (Spoof) Attack (PAD) detected during the scan process');\n          break;\n        case fioErrs.FACE_MISMATCH:\n          console.log('Calculated Facial Vectors of the user being enrolled do not matches');\n          break;\n        case fioErrs.WRONG_PIN_CODE:\n          console.log('Wrong PIN code supplied by the user being authenticated');\n          break;\n        // ...\n        // Refer to the boilerplate at: https://gist.github.com/symisc/34203d2811a39f2a871373abc6dd1ce9\n        // for the list of all possible error codes.\n      }\n    }\n  \n    // const [errors, setErrors] = useState({});\n  \n    return (\n      <>\n        <Box alignItems=\"center\" display=\"flex\" mt={2}>\n          <h4 className=\"text-2xl font-bold mb-4\">FaceRecognition Module</h4>\n        </Box>\n        <textarea>\n          <code>\n            <Formik\n              initialValues={{\n                email: '',\n                password: '',\n                submit: null\n              }}\n              validationSchema={Yup.object().shape({\n                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),\n                password: Yup.string().max(255).required('Password is required')\n              })}\n            >\n              {({ handleSubmit, isSubmitting }) => (\n                <form noValidate onSubmit={handleSubmit} {...rest}>\n                  <Box mt={2}>\n                    <Button color=\"secondary\" onClick={enrollNewUser} fullWidth size=\"large\" type=\"submit\" variant=\"contained\">\n                      Register User\n                    </Button>\n                  </Box>\n  \n                  <Box mt={2}>\n                    <Button color=\"primary\" onClick={authenticateUser} fullWidth size=\"large\" type=\"submit\" variant=\"contained\">\n                      Log In\n                    </Button>\n                  </Box>\n                </form>\n              )}\n            </Formik>\n          </code>\n        </textarea>\n      </>\n    );\n  };\n  \n  export default FireFaceRecognitionCode;\n  "})})]})}}}]);