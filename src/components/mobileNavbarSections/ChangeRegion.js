import React from 'react';
import { TbChevronLeft } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { regionState, anyModalOpenedState } from '../../util/atoms';

function ChangeRegion() {
  const [regionModal, setRegionModal] = useRecoilState(regionState);
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);

  return (
    <>
      <div className="pt-2 text-[#032d60]">
        <p
          className="flex items-center text-xl cursor-pointer -translate-x-1 font-bold"
          onClick={() => {
            setRegionModal(false);
            setAnyModalOpened(false);
          }}
        >
          <TbChevronLeft /> Back
        </p>
        <p className="text-3xl mt-5 font-bold">Change Region</p>
        <div className="pt-5 flex flex-col space-y-12 text-[#385981] text-[16px] h-full">
          <ul className="worldList space-y-3">
            <li>Americas</li>
            <li>América Latina (Español)</li>
            <li>Brasil (Português)</li>
            <li>Canada (English)</li>
            <li>Canada (Français)</li>
            <li>United States (English)</li>
          </ul>
          <ul className="worldList space-y-3">
            <li>Europe, Middle East, and Africa</li>
            <li>España (Español)</li>
            <li>Deutschland (Deutsch)</li>
            <li>France (Français)</li>
            <li>Italia (Italiano)</li>
            <li>Nederland (Nederlands)</li>
            <li>Sverige (Svenska)</li>
            <li>United States (English)</li>
            <li>All other countries (English)</li>
          </ul>
          <ul className="worldList space-y-3">
            <li>Asia Pacific</li>
            <li>Australia & New Zealand (English)</li>
            <li>India (English)</li>
            <li>日本 (日本語)</li>
            <li>中国 (简体中文)</li>
            <li>台灣 (繁體中文)</li>
            <li>한국 (한국어)</li>
            <li>ประเทศไทย (ไทย)</li>
            <li>All other countries (English)</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ChangeRegion;
