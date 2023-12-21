/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toastNotify } from "../../../libs/utils";
import logo4 from "../../../assets/images/logo4.png";

const ForgotOTP = () => {
  const otpRefs = Array.from({ length: 6 }).map(() => useRef());
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
    validationSchema: Yup.object({
      otp1: Yup.string().required("OTP harus diisi"),
      otp2: Yup.string().required("OTP harus diisi"),
      otp3: Yup.string().required("OTP harus diisi"),
      otp4: Yup.string().required("OTP harus diisi"),
      otp5: Yup.string().required("OTP harus diisi"),
      otp6: Yup.string().required("OTP harus diisi"),
    }),
    onSubmit: (values) => {
      const otp = Object.values(values).join("");
      toastNotify({
        type: "success",
        message: `Kode OTP ${otp}`,
      });
    },
  });

  const handleOTPChange = (e, index) => {
    formik.handleChange(e);

    if (e.target.value.length === 1) {
      if (index < otpRefs.length - 1) {
        otpRefs[index + 1].current.focus();
      } else {
        formik.handleSubmit();
      }
    }
  };

  return (
    <section className="h-[100vh] w-full grid lg:grid-cols-2 grid-cols-1 ">
      <div className="flex items-center flex-col justify-center w-full lg:px-24 md:px-16 px-5 lg:py-0 py-10 lg:bg-transparent">
        <h1 className="font-bold lg:text-4xl text-3xl text-darkGrayish text-center">
          Masukkan OTP
        </h1>
        <form
          className="w-full flex flex-col gap-4 my-6"
          onSubmit={formik.handleSubmit}
        >
          <label className="form-control w-full relative">
            <div className="label py-12 text-center">
              <span className="text-sm text-center w-full font-medium">
                Ketik 6 digit kode yang dikirimkan ke{" "}
                <span className="font-bold">J*****@gmail.com</span>
              </span>
            </div>
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-6 gap-1 lg:gap-6 ">
                {Array.from({ length: 6 }).map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    ref={otpRefs[i]}
                    className="font-bold w-[42px] h-9 lg:w-[52px] lg:h-12 bg-whitePale border border-pinkTone/80 focus:border-pinkTone focus:ring-2 focus:ring-pinkTone focus:outline-none rounded-2xl text-center"
                    name={`otp${i + 1}`}
                    value={formik.values[`otp${i + 1}`]}
                    onChange={(e) => handleOTPChange(e, i)}
                    maxLength={1}
                  />
                ))}
              </div>
            </div>
          </label>
          {formik.errors && formik.touched && (
            <div className="text-red-500 text-center">
              {formik.errors.otp1 ||
                formik.errors.otp2 ||
                formik.errors.otp3 ||
                formik.errors.otp4 ||
                formik.errors.otp5 ||
                formik.errors.otp6}
            </div>
          )}

          <p className="text-sm w-full text-center font-medium mt-6 mb-12">
            Kirim Ulang OTP dalam 60 detik
          </p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-pinkTone text-slate-100 self-center w-1/2"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>

      <div className="bg-paleOrange h-full w-full relative lg:block hidden">
        <Link to="/">
          <img
            src={logo4}
            alt="DemyU Course"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </Link>
      </div>
    </section>
  );
};

export default ForgotOTP;
