import Image from "@/components/BasePathImage";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-[#0c0c0c] md:px-32 px-5 pt-40">
        <h1 className="text-white font-[Sahonme-d] md:text-[64px] md:leading-[70px] text-3xl font-semibold">
          VISIONMATE: AI-POWERED SMART GLASSES FOR THE VISUALLY IMPAIRED
        </h1>
        <Image
          src="/visionmate-main.jpg"
          width={900}
          height={550}
          alt="VisionMate smart glasses prototype"
          className="md:w-[calc(100vw-400px)] rounded-2xl w-full h-full py-16 md:px-40 px-0"
        ></Image>
      </div>

      <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
        <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">
          Overview
        </h1>
        <p className="font-[Sahonme-Leicht] text-lg text-white">
          VisionMate is a cost-effective smart-glasses prototype built to help
          blind and low-vision users read text and recognize nearby objects
          through audio feedback. The system is based on Raspberry Pi Zero 2W,
          a Pi Camera module, and a Bluetooth headset. It combines OCR for
          text reading and TensorFlow Lite object detection in one wearable
          device designed for hands-free use.
        </p>
      </div>

      <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
        <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">
          Key Features
        </h1>
        <ul className="text-white list-disc flex flex-col gap-5 pl-5">
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Dual operating modes: Reading Mode and Object Identification Mode
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            OCR pipeline using OCR.space API for printed text extraction
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Real-time object detection using TensorFlow Lite
            EfficientDet-Lite0
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Tactile button interface for mode switching
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Audio output over Bluetooth headset using eSpeak
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Low-cost build focused on accessibility and affordability
          </li>
        </ul>
      </div>

      <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
        <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">
          Hardware and Software Stack
        </h1>
        <ul className="text-white list-disc flex flex-col gap-5 pl-5">
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Raspberry Pi Zero 2W with onboard Wi-Fi and Bluetooth
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Raspberry Pi Camera Module v2 (8MP)
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Python, OpenCV, TensorFlow Lite (EfficientDet-Lite0)
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            OCR.space API, PulseAudio, and eSpeak for voice output
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            GPIO button control and headless Raspberry Pi OS Lite runtime
          </li>
        </ul>
      </div>

      <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
        <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">
          Device Operation
        </h1>
        <p className="font-[Sahonme-Leicht] text-lg text-white">
          The interface cycles through three modes: idle, reading, and object
          ID. In reading mode, snapshots are sent to OCR.space and the returned
          text is read out loud. In object ID mode, captured frames are passed
          into EfficientDet-Lite0 and the highest-confidence detections are
          announced over the Bluetooth headset.
        </p>
      </div>

      <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
        <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">
          Test Results
        </h1>
        <ul className="text-white list-disc flex flex-col gap-5 pl-5">
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Reading mode recognized high-contrast printed text reliably, with
            typical OCR latency of about 3 to 5 seconds per request.
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Object ID mode consistently detected people and common indoor
            objects like chairs and bottles.
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Smaller items and objects outside the model dataset were more
            likely to be missed or misclassified.
          </li>
          <li className="font-[Sahonme-Leicht] text-lg text-white">
            Estimated full prototype cost was around $100, making it
            substantially cheaper than many commercial alternatives.
          </li>
        </ul>
      </div>

      <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
        <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">
          Contribution
        </h1>
        <p className="font-[Sahonme-Leicht] text-lg text-white">
          This was a multidisciplinary team project completed for COEN 803. My
          focus was on the AI and systems implementation track, including model
          integration, end-to-end device workflow, and field testing for both
          OCR and object-recognition modes.
        </p>
      </div>
    </>
  );
};

export default page;
