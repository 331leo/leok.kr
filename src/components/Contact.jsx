import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  const [viewport, setViewport] = useState({
    latitude: 40.712776,
    longitude: -74.005974,
    zoom: 8,
  });

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="map_wrap">
          <div className="map">
            <ReactMapGL
              mapStyle={"mapbox://style/mapbox/dark-v9"}
              mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
          </div>
        </div>
        {/* MENU WRAP */}

        <div className="fields">
          <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="first">
              <ul>
                <li>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Name"
                  />
                  {errors.name && errors.name.type === "required" && (
                    <span>Name is required</span>
                  )}
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input
                    {...register(
                      "email",
                      {
                        required: "Email is Required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      },
                      { required: true }
                    )}
                    type="email"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span role="alert">{errors.email.message}</span>
                  )}
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea
                    {...register("subject", { required: true })}
                    placeholder="Message"
                  ></textarea>
                  {errors.subject && <span>Subject is required.</span>}
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
