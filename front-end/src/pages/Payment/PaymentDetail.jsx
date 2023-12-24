import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const PaymentDetail = () => {
  return (
    <div className="pt-20">
      {/* KEMBALI DAN NOTIFIKASI BATAS PEMBAYARAN */}
      <div className="md:px-[100px] px-5 py-6 shadow-md">
        {/* LINK KEMBALI */}
        <Link to="/" className="flex gap-5">
          <ArrowLeftIcon className="w-5 font-extrabold" />
          <h1 className="font-bold">Kembali</h1>
        </Link>

        <div className="bg-alertRed mx-auto px-5 py-3 rounded-xl md:w-[800px] mt-2">
          <h1 className="text-center text-white font-bold md:text-[16px] text-[12px]">
            Selesaikan Pembayaran sampai 10 Maret 2023 12:00
          </h1>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:px-[100px] px-5 gap-10 h-[600px]">
        {/* KIRI */}
        {/* kotak Pembayaran */}
        <div className="w-full px-4 pt-16 ">
          <div className="mx-auto sm:w-[600px] max-w-md rounded-2xl bg-white p-2">
            <Disclosure className="">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-darkGrayish px-4 py-2 text-left text-sm font-medium text-white">
                    <span>Bank Transfer</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black shadow-xl ">
                    Keterangan Bank
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-darkMagenta px-4 py-2 text-left text-sm font-medium text-white">
                    <span>Credit Card</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-sm text-black  ">
                    <div className="p-5 ">
                      {/* PAYMENT OPTIONS */}
                      <div className="flex gap-5 place-content-center  place-items-center">
                        <Link to="/">
                          <img
                            src="/src/assets/images/icon/mastercard logo.svg"
                            width={50}
                            height={50}
                            alt="mastercard"
                          />
                        </Link>
                        <Link to="/">
                          <img
                            src="/src/assets/images/icon/visa logo.svg"
                            width={50}
                            height={50}
                            alt="visa"
                          />
                        </Link>
                        <Link to="/">
                          <img
                            src="/src/assets/images/icon/amex logo.svg"
                            width={50}
                            height={50}
                            alt="amex"
                          />
                        </Link>
                        <Link to="/">
                          <img
                            src="/src/assets/images/icon/paypal logo.svg"
                            width={50}
                            height={50}
                            alt="paypal"
                          />
                        </Link>
                      </div>
                      {/* CARD DETAIL */}
                      <form action="" className="md:w-[400px]">
                        <div className="mt-3">
                          <h3 className="font-bold">Card Number</h3>
                          <input
                            type="text"
                            className="border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black w-full"
                            placeholder="4480 0000 0000 0000"
                          />
                        </div>

                        <div className="mt-3">
                          <h3 className="font-bold">Card Holder Name</h3>
                          <input
                            type="text"
                            className="border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black w-full"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="flex gap-5 mt-3">
                          <div>
                            <h3 className="font-bold">CVV</h3>
                            <input
                              type="text"
                              className="border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black md:w-[250px] w-[140px]"
                              placeholder="000"
                            />
                          </div>

                          <div>
                            <h3 className="font-bold">Expiry Date</h3>
                            <input
                              type="text"
                              className="border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black md:w-[132px] w-[100px]"
                              placeholder="07/24"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="md:w-[600px] ">{/* BANK TRANSFER */}</div>
        {/* KANAN */}
        {/* PEMBAYARAN KELAS */}
        <div className="md:w-[400px] w-[300px] rounded-[16px] shadow-xl p-5 flex-grow-0 flex-shrink-0 h-[372px] mt-[50px]">
          <h1 className="font-bold">Pembayaran Kelas</h1>
          {/* KOTAK COURSE */}
          <div className="md:w-[323px] h-[150px] shadow-md rounded-[15px] mx-auto mt-3 bg-secret-background">
            <div className="">
              <img
                src="/src/assets/images/gambarCourse.svg"
                height={60}
                width={323}
              />
              {/* TEXT KONTEN */}
              <div className="p-2">
                <h3 className="font-semibold md:text-[14px]  text-secret-pink">
                  UI/UX Design
                </h3>
                <h3 className="font-semibold md:text-[12px] text-[11px]">
                  Intro to Basic of User Interaction Design
                </h3>
                <p className="md:text-[10px] text-[8px]">By Simon Doe</p>
              </div>
            </div>
            <div className="flex mt-5 justify-between">
              {/* HARGA */}
              <div className="flex flex-col gap-2">
                <h4 className="font-bold md:text-[16px]">Harga</h4>
                <p className="md:text-[14px] text-[12px]">Rp 349,000</p>
              </div>
              {/* PPN */}
              <div className="flex flex-col gap-2">
                <h4 className="font-bold">PPN 11%</h4>
                <p className="md:text-[14px] text-[12px]">Rp 38,390</p>
              </div>
              {/* TOTAL BAYAR */}
              <div className="flex flex-col gap-2">
                <h4 className="font-bold">Total Bayar</h4>
                <p className="font-bold text-darkGrayish md:text-[14px] text-[12px]">
                  Rp 387,390
                </p>
              </div>
            </div>
            {/* TOMBOL BAYAR */}
            <button className=" justify-between flex w-full bg-pinkTone px-5 py-3 rounded-[15px] mt-5 ">
              <h2 className="font-bold text-white md:text-[14px] text-[12px] ">
                Bayar dan Ikuti Kelas Selamanya
              </h2>
              <img
                src="/src/assets/images/icon/carbon_next-filled.svg"
                height={20}
                width={20}
                alt="next"
                className="md:w-[20px] md:h-[20px] "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
