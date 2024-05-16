import { Faqs } from '@components/faqs';
import { Partners } from '@components/partners';
import { ScrollIndicator } from '@components/shared/scrollIndicator';
import AppLayout from '@layout/app';
import Image from 'next/image';
import { Clock, Envelope, MapPin, PhoneCall } from 'phosphor-react';

export default function Blogs() {
  return (
    <AppLayout>
      <div
        style={{
          backgroundImage: 'url("/images/testimonial.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="w-full h-[90vh] bg-gradient-to-r from-black via-transparent to-transparent"
      >
        {/* <div className="absolute bottom-14 left-0 right-0 top-0 z-10 overflow-hidden bg-gradient-to-r from-black via-transparent to-transparent"></div> */}
        <div className="text-white w-[620px] mt-32 ml-14">
          <div className="text-7xl font-bold font-syne z-50">
            <span>Contact</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5c5c5c]">
              us
            </span>
          </div>
          <div className="font-light text-[#d7d7d7]">
            We love hearing from you! Whether you&apos;re ready to discuss your
            next project, have a question, or just want to say hello, we&apos;re
            all ears. Our team is here to make your experience exceptional. Drop
            us a message, and let&apos;s start a conversation.
          </div>
        </div>
        <div className="-ml-24 mt-20 w-[0%]">
          <ScrollIndicator />
        </div>
      </div>
      <div className="my-10 mx-12">
        <div className="border border-gray-500 p-12 text-white rounded-3xl">
          <div>
            <h1 className="font-bold font-syne text-3xl">Visit us</h1>
            <span className="flex gap-2 items-center text-[#ffffffcc] my-4">
              <MapPin size={28} color="#ff7a3b" /> 123 Studio Street,
              Filmmaker&abpos;s Haven, Cityville, USA
            </span>
            <span className="flex gap-2 items-center text-[#ffffffcc] my-4">
              <Clock size={28} color="#ff7a3b" /> Monday - Friday, 9:00 AM -
              6:00 PM
            </span>
            <span className="flex gap-2 items-center text-[#ffffffcc] my-4">
              <Envelope size={28} color="#ff7a3b" /> info@storystreamvideos.com
            </span>
            <span className="flex gap-2 items-center text-[#ffffffcc] my-4">
              <PhoneCall size={28} color="#ff7a3b" /> (123) 456-7890
            </span>
          </div>
          <h1 className="font-bold font-syne text-3xl mt-16">
            Question? Send us a message. Don&apos;t be shy
          </h1>
          <form className="relative my-6">
            <div className="flex gap-3">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full py-1.5 rounded-[1.3rem] px-3 bg-white/10 focus:outline-none placeholder:text-white/30"
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full h-14 py-1.5 rounded-[1.3rem] px-3 bg-white/10 focus:outline-none placeholder:text-white/30"
              />
            </div>
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              className="w-full my-4 h-44 p-3 rounded-[1.3rem] px-3 bg-white/10 focus:outline-none placeholder:text-white/30"
            ></textarea>
            <button className="bg-[#FF7A3B] w-full text-base font-syne font-semibold text-white px-5 py-3 rounded-[1.3rem]">
              Send message
            </button>
          </form>
        </div>
      </div>
      <Faqs />
      {/* <Partners /> */}
    </AppLayout>
  );
}
