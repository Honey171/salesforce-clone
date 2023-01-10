import React from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { supportState, anyModalOpenedState } from '../../util/atoms';

function Support() {
  const [supportModal, setSupportModal] = useRecoilState(supportState);
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);

  return (
    <>
      <div className="pt-2 text-[#032d60] font-bold">
        <p
          className="flex items-center text-xl cursor-pointer -translate-x-1"
          onClick={() => {
            setSupportModal(false);
            setAnyModalOpened(false);
          }}
        >
          <TbChevronLeft /> Back
        </p>
        <p className="text-3xl mt-5">Learning</p>
        <ul className="space-y-5 text-xl mt-5 productList h-full">
          <li className="flex items-center justify-between">
            <p>Help & Documentation</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>Communities</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>Customer Success</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <div className="pt-[100px] h-auto space-y-3">
            <p className="text-xl">Questions? We can help.</p>
            <button className="bg-[#0176d3] hover:bg-[#023248] text-white py-2 px-6 rounded-sm text-lg ">
              Visit the Help centre
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Support;
