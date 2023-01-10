import React from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { learningState, anyModalOpenedState } from '../../util/atoms';

function Learning() {
  const [learningModal, setLearningModal] = useRecoilState(learningState);
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);

  return (
    <>
      <div className="pt-2 text-[#032d60] font-bold">
        <p
          className="flex items-center text-xl cursor-pointer -translate-x-1"
          onClick={() => {
            setLearningModal(false);
            setAnyModalOpened(false);
          }}
        >
          <TbChevronLeft /> Back
        </p>
        <p className="text-3xl mt-5">Learning</p>
        <ul className="space-y-5 text-xl mt-5 productList h-full">
          <li className="flex items-center justify-between">
            <p>Learning on Trailhead</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>Customer Stories</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>Events & Experiences</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>By Topic</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>By Role</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>By Industry</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>By Content Type</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>Blogs</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>Setup & Optimisation</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <div className="pt-[100px] h-auto space-y-3">
            <p className="text-xl">Become a Trailblazer.</p>
            <button className="bg-[#0176d3] hover:bg-[#023248] text-white py-2 px-6 rounded-sm text-lg ">
              Join for free
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Learning;
