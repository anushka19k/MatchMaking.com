import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {

  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [religion, setReligion] = useState("");
  const [community, setCommunity] = useState("");
  const [country, setCountry] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const genderUpdate = (event) => {
    setGender(event.target.value);
  };

  function firstUpdate(event) {
    setFirstName(event.target.value);
  }

  function lastUpdate(event) {
    setLastName(event.target.value);
  }

  function dateUpdate(event) {
    setDate(event.target.value);
  }

  function monthUpdate(event) {
    setMonth(event.target.value);
  }

  function yearUpdate(event) {
    setYear(event.target.value);
  }

  function religionUpdate(event) {
    setReligion(event.target.value);
  }

  function communityUpdate(event) {
    setCommunity(event.target.value);
  }

  function countryUpdate(event) {
    setCountry(event.target.value);
  }

  function professionUpdate(event) {
    setProfession(event.target.value);
  }

  function emailUpdate(event) {
    setEmail(event.target.value);
  }

  function phoneUpdate(event) {
    setPhoneNumber(event.target.value);
  }

  function passwordUpdate(event) {
    setPassword(event.target.value);
  }

  function Addusertodb(e) {
    e.preventDefault();
    if (
      (gender &&
        firstname &&
        lastname &&
        date &&
        month &&
        year &&
        religion &&
        community &&
        country &&
        profession &&
        email &&
        phonenumber &&
        password) !== ""
    ) {
      e.preventDefault();
      fetch(`http://localhost:4000/adduser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname:firstname,
        lastname:lastname,
        date:date,
        month:month,
        year:year,
        religion:religion,
        community:community,
        country:country,
        profession:profession,
        email:email,
        phonenumber:phonenumber,
        password:password,
        })
      });
      setGender("");
      setFirstName("");
      setLastName("");
      setDate("");
      setMonth("");
      setYear("");
      setReligion("");
      setCommunity("")
      setCountry("");
      setProfession("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      navigate("/singles");
    } else {
      alert("Please fill all details to proceed.");
    }
  }

  return (
    <div className="registerPage">
      <h1>Create Your Profile</h1>
      <div className="gendersdiv inputdivs">
        <h3>Gender</h3>
        <Form.Group required>
          <Form.Check
            inline
            label="Male"
            name="gender"
            value="Male"
            type="radio"
            onChange={genderUpdate}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            value="Female"
            type="radio"
            onChange={genderUpdate}
            id={`inline-radio-1`}
          />
        </Form.Group>
      </div>

      <div className="nameDiv inputdivs">
        <h3>Your name</h3>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              className="nameinput"
              type="name"
              value={firstname}
              onChange={firstUpdate}
              placeholder="First Name"
              required
            />
            <Form.Control
              className="nameinput"
              type="name"
              value={lastname}
              onChange={lastUpdate}
              required
              placeholder="Last Name"
            />
          </Form.Group>
        </Form>
      </div>

      <div className="DOBdiv inputdivs">
        <h3>Date of birth</h3>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <div className="dob">
              <Form.Control
                className="dobinputs"
                type="number"
                value={date}
                required
                onChange={dateUpdate}
                pattern="[0-9]{0,5}"
                onKeyDown={(e) =>
                  /[\+\-\.\,]$/.test(e.key) && e.preventDefault()
                }
                placeholder="DD"
              />
              <Form.Control
                className="dobinputs"
                type="number"
                value={month}
                required
                pattern="[0-9]{0,5}"
                onChange={monthUpdate}
                placeholder="MM"
              />
              <Form.Control
                className="dobinputs"
                type="number"
                value={year}
                pattern="[0-9]{0,5}"
                required
                onChange={yearUpdate}
                placeholder="YYYY"
              />
            </div>
          </Form.Group>
        </Form>
      </div>

      <div className="religionDiv inputdivs">
        <h3>Religion</h3>

        <Form.Select onChange={religionUpdate}>
          <option>Select Your Religion</option>
          <option value="Hindu">Hindu</option>
          <option value="Muslim">Muslim</option>
          <option value="Sikh">Sikh</option>
          <option value="Christian">Christian</option>
          <option value="Jain">Jain</option>
          <option value="Buddhist">Buddhist</option>
          <option value="Parsi">Parsi</option>
          <option value="Jewish">Jewish</option>
          <option value="Other">Other</option>
          <option value="No Religion">No Religion</option>
          <option value="Spiritual - not religious">
            Spiritual - not religious
          </option>
        </Form.Select>
      </div>

      <div className="communityDiv inputdivs">
        <h3>Community</h3>

        <Form.Select onChange={communityUpdate}>
          <option>Select Your Community</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Bengali">Bengali</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Urdu">Urdu</option>
          <option value="Telegu">Telegu</option>
          <option value="Kanada">Kanada</option>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Odia">Odia</option>
          <option value="Other">Other</option>
        </Form.Select>
      </div>

      <div className="livinginDiv inputdivs">
        <h3>Living In</h3>

        <Form.Select onChange={countryUpdate}>
          <option>Select Your Country</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Åland Islands">Åland Islands</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bermuda">Bermuda</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Bouvet Island">Bouvet Island</option>
          <option value="Brazil">Brazil</option>
          <option value="British Indian Ocean Territory">
            British Indian Ocean Territory
          </option>
          <option value="Brunei Darussalam">Brunei Darussalam</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Cayman Islands">Cayman Islands</option>
          <option value="Central African Republic">
            Central African Republic
          </option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Christmas Island">Christmas Island</option>
          <option value="Cocos (Keeling) Islands">
            Cocos (Keeling) Islands
          </option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Congo">Congo</option>
          <option value="Congo, The Democratic Republic of The">
            Congo, The Democratic Republic of The
          </option>
          <option value="Cook Islands">Cook Islands</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Cote D'ivoire">Cote D'ivoire</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Equatorial Guinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Falkland Islands (Malvinas)">
            Falkland Islands (Malvinas)
          </option>
          <option value="Faroe Islands">Faroe Islands</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="French Guiana">French Guiana</option>
          <option value="French Polynesia">French Polynesia</option>
          <option value="French Southern Territories">
            French Southern Territories
          </option>
          <option value="Gabon">Gabon</option>
          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Gibraltar">Gibraltar</option>
          <option value="Greece">Greece</option>
          <option value="Greenland">Greenland</option>
          <option value="Grenada">Grenada</option>
          <option value="Guadeloupe">Guadeloupe</option>
          <option value="Guam">Guam</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guernsey">Guernsey</option>
          <option value="Guinea">Guinea</option>
          <option value="Guinea-bissau">Guinea-bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Heard Island and Mcdonald Islands">
            Heard Island and Mcdonald Islands
          </option>
          <option value="Holy See (Vatican City State)">
            Holy See (Vatican City State)
          </option>
          <option value="Honduras">Honduras</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran, Islamic Republic of">
            Iran, Islamic Republic of
          </option>
          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Isle of Man">Isle of Man</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jersey">Jersey</option>
          <option value="Jordan">Jordan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Korea, Democratic People's Republic of">
            Korea, Democratic People's Republic of
          </option>
          <option value="Korea, Republic of">Korea, Republic of</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Lao People's Democratic Republic">
            Lao People's Democratic Republic
          </option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Liberia">Liberia</option>
          <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Macao">Macao</option>
          <option value="Macedonia, The Former Yugoslav Republic of">
            Macedonia, The Former Yugoslav Republic of
          </option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Marshall Islands">Marshall Islands</option>
          <option value="Martinique">Martinique</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mayotte">Mayotte</option>
          <option value="Mexico">Mexico</option>
          <option value="Micronesia, Federated States of">
            Micronesia, Federated States of
          </option>
          <option value="Moldova, Republic of">Moldova, Republic of</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Netherlands Antilles">Netherlands Antilles</option>
          <option value="New Caledonia">New Caledonia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Niue">Niue</option>
          <option value="Norfolk Island">Norfolk Island</option>
          <option value="Northern Mariana Islands">
            Northern Mariana Islands
          </option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Palestinian Territory, Occupied">
            Palestinian Territory, Occupied
          </option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Pitcairn">Pitcairn</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Puerto Rico">Puerto Rico</option>
          <option value="Qatar">Qatar</option>
          <option value="Reunion">Reunion</option>
          <option value="Romania">Romania</option>
          <option value="Russian Federation">Russian Federation</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Saint Helena">Saint Helena</option>
          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
          <option value="Saint Lucia">Saint Lucia</option>
          <option value="Saint Pierre and Miquelon">
            Saint Pierre and Miquelon
          </option>
          <option value="Saint Vincent and The Grenadines">
            Saint Vincent and The Grenadines
          </option>
          <option value="Samoa">Samoa</option>
          <option value="San Marino">San Marino</option>
          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Sierra Leone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Solomon Islands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="South Africa">South Africa</option>
          <option value="South Georgia and The South Sandwich Islands">
            South Georgia and The South Sandwich Islands
          </option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
          <option value="Swaziland">Swaziland</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syrian Arab Republic">Syrian Arab Republic</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania, United Republic of">
            Tanzania, United Republic of
          </option>
          <option value="Thailand">Thailand</option>
          <option value="Timor-leste">Timor-leste</option>
          <option value="Togo">Togo</option>
          <option value="Tokelau">Tokelau</option>
          <option value="Tonga">Tonga</option>
          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Turks and Caicos Islands">
            Turks and Caicos Islands
          </option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="United States Minor Outlying Islands">
            United States Minor Outlying Islands
          </option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Viet Nam">Viet Nam</option>
          <option value="Virgin Islands, British">
            Virgin Islands, British
          </option>
          <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
          <option value="Wallis and Futuna">Wallis and Futuna</option>
          <option value="Western Sahara">Western Sahara</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </Form.Select>
      </div>

      <div className="professionDiv inputdivs">
        <h3>Profession</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              className="professionInput"
              value={profession}
              onChange={professionUpdate}
              required
              type="text"
              placeholder="Enter Your Profession"
            />
          </Form.Group>
        </Form>
      </div>

      <div className="emailphoneDiv inputdivs">
        <h3>Email ID</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="emailinput"
              type="email"
              value={email}
              onChange={emailUpdate}
              placeholder="Email ID"
            />
          </Form.Group>
        </Form>
      </div>

      <div className="phoneDiv inputdivs">
        <h3>Phone Number</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Control
              className="phoneinput"
              type="number"
              required
              value={phonenumber}
              onChange={phoneUpdate}
              placeholder="Phone number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <h3>Password</h3>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={passwordUpdate}
            />
          </Form.Group>
          <Form.Text
            className="text-muted"
            style={{ fontSize: "1.5rem", color: "white" }}
          >
            We'll never share your data with anyone else.
          </Form.Text>
        </Form>
      </div>

      <Button variant="light" onClick={Addusertodb}>
        Submit
      </Button>
    </div>
  );
}

export default Register;
