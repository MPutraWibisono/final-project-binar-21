import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  IoPencilSharp,
  IoArrowBackSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { PiEye, PiEyeSlash } from "react-icons/pi";

const ChangePass = () => {
  const [passLamaValue, setPassLamaValue] = useState({
    password: "",
    showPass: false,
  });
  const [passBaruValue, setPassBaruValue] = useState({
    password: "",
    showPass: false,
  });
  const [passValue, setPassValue] = useState({
    password: "",
    showPass: false,
  });

  const handlePassLama = (event) => {
    setPassLamaValue((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const handlePassBaru = (event) => {
    setPassBaruValue((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const handlePass = (event) => {
    setPassValue((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const toggleVisibility = (field) => {
    if (field === "passLama") {
      setPassLamaValue((prevState) => ({
        ...prevState,
        showPass: !prevState.showPass,
      }));
    } else if (field === "passBaru") {
      setPassBaruValue((prevState) => ({
        ...prevState,
        showPass: !prevState.showPass,
      }));
    } else if (field === "passValue") {
      setPassValue((prevState) => ({
        ...prevState,
        showPass: !prevState.showPass,
      }));
    }
  };

  const showAlert = (message, type = "info", duration = 5000) => {
    const alertElement = document.createElement("div");
    alertElement.classList.add("custom-alert");
    alertElement.classList.add("text-white");
    alertElement.classList.add("rounded-lg");
    alertElement.classList.add("w-[250px]");
    alertElement.classList.add("items-center");
    alertElement.classList.add("text-center");
    alertElement.classList.add("py-2");
    alertElement.classList.add("px-5");
    alertElement.classList.add("text-xs");
    alertElement.classList.add("bottom-6");
    alertElement.classList.add("mx-auto");

    if (type === "success") {
      alertElement.classList.add("bg-alertGreen");
    } else if (type === "error") {
      alertElement.classList.add("bg-alertRed");
    }

    alertElement.textContent = message;
    document.body.appendChild(alertElement);

    setTimeout(() => {
      alertElement.style.display = "none";
      document.body.removeChild(alertElement);
    }, duration);
  };

  const validasi = (event) => {
    event.preventDefault();

    if (passLamaValue.password === passBaruValue.password) {
      showAlert("Password Lama tidak boleh sama dengan Password Baru", "error");
    } else if (passBaruValue.password !== passValue.password) {
      showAlert("Password Baru tidak cocok dengan konfirmasi", "error");
    } else {
      showAlert("Berhasil Reset Password", "success");
    }
  };

  return (
    <>
      <div className="pt-20">
        {/* Header */}
        <Disclosure className="bg-paleOrange h-20">
          <div className="flex items-center w-full">
            <IoArrowBackSharp className="h-6 w-6 text-pinkTone mt-1" />
            <div className="text-1xl text-pinkTone mt-1 ml-2">
              <Link to="/">Kembali ke Beranda</Link>
            </div>
          </div>
        </Disclosure>

        {/* Main Container */}
        <div className="flex pb-5 h-screen items-start justify-center">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md flex flex-col w-3/4 border border-pinkTone">
            <div className="bg-pinkTone text-white p-4 flex items-center justify-center rounded-t-lg">
              <h1 className="text-2xl tracking-tight">Akun</h1>
            </div>
            <div className="flex">
              <ul className="col-span-1 p-4 w-1/2">
                <li
                  style={{ marginTop: "2rem" }}
                  className="text-1xl flex items-center justify-between  border-b"
                >
                  <Link to="/profile">
                    <div className="flex items-center">
                      <IoPencilSharp className="text-pinkTone mr-2" />
                      <span>Profil Saya</span>
                    </div>
                  </Link>
                </li>
                <li
                  style={{ marginTop: "2rem" }}
                  className="text-1xl flex items-center justify-between  border-b"
                >
                  <Link to="/changepassword">
                    <div className="flex items-center">
                      <IoSettingsOutline className="text-pinkTone mr-2" />
                      <span>Ubah Password</span>
                    </div>
                  </Link>
                </li>
                <li
                  style={{ marginTop: "2rem" }}
                  className="text-1xl flex items-center justify-between  border-b"
                >
                  <Link to="/purchasehistory">
                    <div className="flex items-center">
                      <IoCartOutline className="text-pinkTone mr-2" />
                      <span>Riwayat Pembayaran</span>
                    </div>
                  </Link>
                </li>
                <li
                  style={{ marginTop: "2rem" }}
                  className="text-1xl flex items-center justify-between border-b"
                >
                  <Link to="/">
                    <div className="flex items-center ">
                      <IoLogOutOutline className="text-pinkTone mr-2" />
                      <span>Keluar</span>
                    </div>
                  </Link>
                </li>
                <p className="text-sm text-gray-500 mt-5 p-5 text-center">
                  Versi 1.0.0
                </p>
              </ul>

              {/* Content */}
              <div className="col-span-3 p-4 w-full mx-auto flex justify-center flex-col items-start">
                <div className="text-left mx-auto max-w-7xl content-container">
                  <form onSubmit={validasi}>
                    <div className="text-center">
                      <div className="text-2xl font-semibold sm:text-left">
                        Ubah Password
                      </div>
                    </div>
                    <div className="mt-2 relative block mb-4 lg:mb-8">
                      <br />
                      <p className="float-left">Masukkan Password Lama</p>
                      <br />
                      <input
                        type={passLamaValue.showPass ? "text" : "password"}
                        name="passLama"
                        id="passInputlama"
                        placeholder="Password Lama"
                        className="float-left border-2 rounded-2xl w-full p-2 text-black"
                        value={passLamaValue.password}
                        onChange={handlePassLama}
                        required
                        autoComplete="current-password"
                      />
                      <button
                        className="absolute right-4 top-14"
                        onClick={() => toggleVisibility("passLama")}
                      >
                        {!passLamaValue.showPass ? (
                          <PiEye color="grey" size={30} />
                        ) : (
                          <PiEyeSlash color="grey" size={30} />
                        )}
                      </button>
                    </div>
                    <div className="mt-2 relative block mb-4 lg:mb-8">
                      <br />
                      <p className="float-left">Masukkan Password Baru</p>
                      <br />
                      <input
                        type={passBaruValue.showPass ? "text" : "password"}
                        name="passwordBaru"
                        id="passInputBaru"
                        placeholder=" Password Baru"
                        className="float-left border-2 rounded-2xl w-full p-2 text-black"
                        value={passBaruValue.password}
                        onChange={handlePassBaru}
                        required
                        autoComplete="new-password"
                      />
                      <button
                        className="absolute right-4 top-14"
                        onClick={() => toggleVisibility("passBaru")}
                      >
                        {!passBaruValue.showPass ? (
                          <PiEye color="grey" size={30} />
                        ) : (
                          <PiEyeSlash color="grey" size={30} />
                        )}
                      </button>
                    </div>
                    <div className="mt-2 relative block mb-4 lg:mb-8">
                      <br />
                      <p className="float-left">Ulangi Password</p>
                      <br />
                      <input
                        type={passValue.showPass ? "text" : "password"}
                        name="ulangiPassword"
                        id="passInput"
                        placeholder="Ulangi Password"
                        className="float-left border-2 rounded-2xl w-full p-2 text-black"
                        value={passValue.password}
                        onChange={handlePass}
                        required
                        autoComplete="new-password"
                      />
                      <button
                        className="absolute right-4 top-14"
                        onClick={() => toggleVisibility("passValue")}
                      >
                        {!passValue.showPass ? (
                          <PiEye color="grey" size={30} />
                        ) : (
                          <PiEyeSlash color="grey" size={30} />
                        )}
                      </button>
                    </div>
                    <div className="text-center">
                      <button
                        onClick={validasi}
                        type="submit"
                        className="text-sm rounded-2xl font-semibold leading-6 bg-darkRed text-white border-4 border-darkRed m-10"
                      >
                        Ubah Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
