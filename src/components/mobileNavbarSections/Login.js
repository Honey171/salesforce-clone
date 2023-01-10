import React from 'react';
import { TbChevronLeft } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { loginState, anyModalOpenedState } from '../../util/atoms';
import { miniLogo } from '../../assets/imageLinks';

function Login() {
  const [loginModal, setLoginModal] = useRecoilState(loginState);
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);

  return (
    <>
      <div className="pt-2 text-[#032d60]">
        <p
          className="flex items-center text-xl cursor-pointer -translate-x-1 font-bold"
          onClick={() => {
            setLoginModal(false);
            setAnyModalOpened(false);
          }}
        >
          <TbChevronLeft /> Back
        </p>
        <p className="text-3xl mt-5 font-bold">Login</p>
        <ul className=" pt-7 flex flex-col space-y-10 text-[#385981] text-[16px]">
          <div className="space-y-3">
            <p className="text-[#4B4B4B]">Products</p>
            <span className="flex underline space-x-2 cursor-pointer hover:text-[#4299DE]">
              <p>Salesforce</p>
              <img
                src={miniLogo}
                alt=""
              />
            </span>
            <p className="underline cursor-pointer hover:text-[#4299DE]">
              Marketing cloud
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-[#4B4B4B]">Trailblazer.me</p>
            <p className="underline cursor-pointer hover:text-[#4299DE]">
              Trailblazer.me
            </p>
            <p className="text-[#4B4B4B]">
              Access your personal profile, community groups, on-demand
              learning, events, support, and more.
            </p>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Login;
