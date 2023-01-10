import React from 'react';
import { TbChevronLeft } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { contactState, anyModalOpenedState } from '../../util/atoms';
import { miniLogo } from '../../assets/imageLinks';

function Contact() {
  const [contactModal, setContactModal] = useRecoilState(contactState);
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);

  return (
    <>
      <div className="pt-2 text-[#032d60]">
        <p
          className="flex items-center text-xl cursor-pointer -translate-x-1 font-bold"
          onClick={() => {
            setContactModal(false);
            setAnyModalOpened(false);
          }}
        >
          <TbChevronLeft /> Back
        </p>
        <p className="text-3xl mt-5 font-bold">Contact</p>
        <ul className=" pt-7 flex flex-col space-y-10 text-[#385981] text-[16px]">
          <div className="space-y-3">
            <p className="text-[#4B4B4B]">By phone</p>
            <span className="flex underline space-x-2 cursor-pointer hover:text-[#4299DE]">
              <p>00800 7253 3333</p>
            </span>
          </div>
          <div className="space-y-3">
            <p className="text-[#4B4B4B]">Online</p>
            <p className="underline cursor-pointer hover:text-[#4299DE]">
              Contact Us
            </p>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Contact;
