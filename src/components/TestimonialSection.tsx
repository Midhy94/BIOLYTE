import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  function: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'BIOLYTE brought European engineering rigor and clear operational structure to our agricultural waste conversion project, delivering biomethane yields that exceeded our design targets on every metric.',
    name: '— Dr. Tariq Al-Mansoor',
    function: 'Eastern Province Agricultural Development, Operations Director',
  },
  {
    id: 2,
    quote:
      'Deploying BIOLYTE’s water-free dust suppression across our heavy industrial corridors eliminated millions of liters of water waste each month while permanently withstanding heavy haul traffic.',
    name: '— Eng. Fahad Al-Ghamdi',
    function: 'Industrial Cities Infrastructure Authority, Director of Environmental Affairs',
  },
  {
    id: 3,
    quote:
      'The technical capability of BIOLYTE’s team in anaerobic digestion and thermal bio-hydrogen synthesis gave our stakeholders complete confidence. A true EPC partner for industrial decarbonization.',
    name: '— Marco Bernardi',
    function: 'Euro-Gulf Clean Energy Consortium, Chief Executive Officer',
  },
];

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const current = testimonials[currentIndex];
  const formattedCurrent = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(testimonials.length).padStart(2, '0');

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 py-20 md:py-28 lg:py-32 flex items-center justify-center">
      {/* Background Aerial Video & Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/quote-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-[0.9]"
        >
          <source src="/images/quote-bg.mp4" type="video/mp4" />
        </video>
        {/* Atmospheric theme overlay */}
        <div className="absolute inset-0 bg-dtre-darker/65 backdrop-blur-[2px]" />
      </div>

      {/* Main Centered Quote Card */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-white"
          style={{ backgroundColor: '#D12B81' }}
        >
          {/* Topographical Contour Lines SVG Overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-100 flex items-center justify-center overflow-hidden">
            <svg
              className="w-full h-full object-cover min-w-[900px] min-h-[400px]"
              viewBox="0 0 1601 478"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M0.5 477.441C96.76 477.261 260.61 477.81 333.53 477.211C347.1 476.941 364.24 476.122 379.54 474.903C493.48 467.382 547.79 426.258 643.28 442.11C684.73 448.553 718.85 465.065 760.61 472.057C781.66 475.742 806.35 477.55 827.58 476.412C938.38 469.52 1009.05 376.045 1128.66 391.807C1227.46 400.418 1260 465.124 1371.2 474.274C1385.86 475.782 1399.31 476.592 1412.08 476.881C1466.6 477.191 1536.46 476.901 1600.51 477.001"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 465.554C54.94 465.554 168.89 465.554 232.7 465.554C280.58 465.165 329.79 466.883 378.5 463.307C470.85 458.472 526.37 429.185 596.68 429.195C606.45 429.195 616.96 429.735 626.9 430.753C674.74 435.278 708.15 453.178 754.26 462.877C775.96 467.392 799.75 469.929 822.51 469.39C920.62 466.653 996.22 380.84 1094.63 380.82C1137.08 379.661 1180.72 389.33 1215.32 407.64C1281.17 443.749 1325.2 462.857 1406.49 464.685C1470.84 465.704 1542.8 464.845 1600.47 465.115"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 453.657C63.54 453.657 185.96 453.657 257.8 453.657C298.29 453.478 337.64 454.536 378.53 451.64C471.47 447.145 527.95 419.086 598.6 420.005C608.31 420.135 618.76 420.785 628.62 421.923C677.12 427.107 710.54 445.736 757.93 455.705C778.99 460.07 802.86 462.847 825.21 462.068C915.92 457.433 986.55 381.149 1075.79 372.899C1115.76 369.093 1160.61 374.617 1197.31 390.409C1202.71 392.666 1207.86 395.054 1212.89 397.501C1258.61 421.124 1308.91 447.824 1385.13 451.78C1410.48 453.468 1438.42 453.208 1462.87 453.238C1507.34 453.238 1564.63 453.238 1600.47 453.238"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 441.771C60.88 441.771 179.48 441.771 248.62 441.771C293.33 441.501 333.42 442.83 378.48 439.963C481.04 435.398 538.37 404.034 620.86 412.064C682.17 416.899 725.08 446.356 790.59 453.258C803.96 454.786 818.33 455.505 831.39 454.497C918.36 445.457 986.41 372.669 1072.92 364.079C1112.78 359.943 1157.47 364.968 1194.3 380.191C1203.24 383.796 1211.39 387.722 1219.87 391.917C1260.93 413.013 1314.06 435.938 1383.13 439.823C1421.23 442.25 1461.61 441.072 1498.21 441.341C1531.02 441.341 1576.87 441.341 1600.46 441.341"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 417.998C71.44 417.998 199.02 417.998 277.16 417.998C311.47 417.968 343.08 418.567 378.19 416.609C482.18 412.824 541.21 384.346 624.5 394.225C685.07 400.268 726.98 429.705 789.9 438.235C802.97 440.103 817 441.142 829.87 440.183C854.33 438.475 877.08 428.965 899.14 418.577C954.52 392.197 1005.95 354.15 1066.99 346.459C1107.11 341.564 1152.15 345.729 1189.57 360.223C1195.38 362.441 1200.84 364.788 1206.17 367.205C1254.84 390.559 1313.6 413.053 1389.01 416.559C1423.53 418.257 1458.59 417.388 1491.59 417.598C1526.96 417.598 1573.77 417.598 1600.48 417.598"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 382.328C77.53 382.348 209.31 382.278 295.34 382.368C335.46 382.678 376.62 382.498 417.32 379.431C490.34 374.757 549.6 358.395 614.25 365.617C689.05 371.161 751.92 421.664 827.51 418.777C850.86 417.209 872.2 406.9 892.93 396.382C947.53 368.184 998.13 328.978 1059.01 319.859C1098.7 314.035 1143.19 316.702 1180.79 329.568C1186.42 331.486 1191.65 333.523 1196.73 335.621C1246.54 357.346 1312.84 377.194 1387.01 381.01C1418.8 382.568 1450.01 381.809 1480.44 381.979C1520.06 381.979 1568.43 381.979 1600.52 381.979"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 346.668C112.09 346.329 261.08 347.288 375.2 346.479C476.69 345.28 540.14 328 616.64 338.148C625.36 339.347 634.55 340.985 643.29 342.953C699.67 355.249 743.83 387.063 802.62 396.362C831.05 401.407 855.81 391.548 880.23 377.893C929.87 351.063 976.31 313.925 1029.54 298.243C1065.38 288.015 1105.69 286.646 1142.27 292.18C1153.05 293.898 1162.73 296.056 1172.16 298.912C1232.85 321.876 1304.41 341.285 1386.19 345.49C1418.55 346.928 1448.42 346.149 1479.33 346.339C1520.6 346.339 1564.03 346.339 1600.49 346.339"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 299.112C102.31 299.182 253.9 298.852 364.16 299.522C442.99 300.65 525.86 290.062 597.02 298.013C607.34 299.222 617.12 300.75 627.78 302.938C684.29 313.346 727.22 343.622 780.24 361.991C820.88 376.475 843.09 367.665 877.75 345.56C956.42 295.336 1002.89 250.567 1101.41 251.116C1122.81 251.096 1145.11 253.663 1164.62 259.017C1219.1 277.417 1295.54 291.95 1371.39 297.364C1399.32 299.262 1424.65 298.743 1452.79 298.812C1504.02 298.812 1554.63 298.812 1600.48 298.812"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 251.556C109.97 251.766 263.8 250.917 378.58 252.385C474.55 254.073 560.11 245.303 646.26 270.604C695.68 285.008 733.17 312.147 778.1 331.835C796.16 339.886 816.44 344.441 835.08 336.82C849.56 331.286 862.74 321.357 875.67 312.397C941.69 264.721 990.55 220.611 1074.33 213.928C1101.6 211.271 1129.64 212.28 1155.62 218.433C1174.16 223.398 1189.99 227.633 1210.77 231.149C1267.17 240.978 1337.74 249.428 1392.83 251.016C1468.15 251.786 1535.61 251.126 1600.51 251.336"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 203.999C112.7 204.449 265.46 202.801 380.06 205.268C488.42 207.755 550.84 207.096 627.58 227.763C643.75 232.308 660.78 238.321 676.58 245.533C710.28 260.745 739.2 281.072 771.31 299.222C789.6 309.92 810.73 317.581 830.9 308.152C843.84 302.568 855.38 292.699 866.77 283.879C921.63 239.889 973.56 192.243 1043.04 179.547C1075.84 172.585 1111.18 170.887 1143.56 176.93C1216.37 192.962 1311.8 199.734 1382.91 203.36C1459.84 204.439 1531.42 203.5 1600.49 203.8"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 156.443C115.94 157.122 268.8 154.725 382.79 158.131C491.74 162.037 557.71 166.222 635.26 192.043C651.01 197.507 667.47 204.439 682.69 212.41C713.45 228.362 740.71 248.839 768.82 268.347C783.96 279.234 803.16 288.983 821.57 281.602C835.54 276.438 846.37 265.72 857.72 255.861C911.84 207.226 963.64 157.302 1034.58 141.57C1064.91 133.969 1097.42 131.302 1128.19 134.987C1205.43 147.893 1313.41 153.177 1384.69 156.034C1459.24 156.663 1531.24 156.104 1600.44 156.283"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 108.887C99.46 109.227 246.81 108.168 339.34 109.386C450.48 111.904 556.29 121.283 636.87 154.176C668.99 166.712 700.62 185.201 727.97 206.237C741.67 216.595 754.62 227.443 767.42 238.171C778.91 247.9 793.02 257.889 808.46 255.591C820.6 254.103 832.28 244.764 841.31 235.814C891.42 186.27 938.59 134.448 1003.47 110.665C1038.95 97.0704 1079.54 90.6876 1117.11 93.7142C1181.63 101.595 1301.37 106.27 1384.25 108.617C1455.53 108.987 1530.77 108.657 1600.49 108.757"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 61.3207C101.68 61.7102 254.4 60.5016 343.67 61.89C511.94 67.1041 655.61 91.0671 763.91 205.917C774.52 216.935 788.13 229.8 804.26 227.283C818.66 225.325 830.86 211.831 840.38 200.893C889.87 144.786 938.25 92.2258 1007.36 67.7934C1037.99 56.4861 1071.87 51.312 1104.49 52.2909C1185.97 57.5449 1288.92 59.1631 1370.32 60.9811C1437.62 61.6004 1524.46 61.081 1600.5 61.2408"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.5 13.7645C76.87 13.7645 202.09 13.7645 285.11 13.7645C463.82 12.1264 652.47 37.6176 762.39 175.172C779.37 197.607 798.02 209.963 821.36 186.3C828.81 178.608 834.92 169.778 841.69 161.378C856.32 142.829 871.37 124.819 887.54 107.878C942.62 49.0646 1008.99 11.7768 1090.96 10.9277C1261 13.6147 1431.51 13.9943 1600.47 13.7246"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="0.9"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Top Row: Quotation Mark & Counter */}
          <div className="relative z-10 flex items-start justify-between mb-8 sm:mb-12">
            <svg
              className="w-7 h-5 sm:w-8 sm:h-6 text-white/90"
              viewBox="0 0 32 24"
              fill="currentColor"
              aria-hidden="true"
            >
              {/* Modern geometric architectural quote glyph */}
              <path d="M0 24L7.5 0H14.5L7 24H0ZM17.5 24L25 0H32L24.5 24H17.5Z" />
            </svg>
            <div className="flex items-center space-x-1.5 text-xs sm:text-sm font-mono tracking-widest text-white/80 select-none">
              <span>{formattedCurrent}</span>
              <span className="opacity-40">|</span>
              <span>{formattedTotal}</span>
            </div>
          </div>

          {/* Middle: Testimonial Quote */}
          <div className="relative z-10 min-h-[160px] sm:min-h-[170px] md:min-h-[190px] flex items-center mb-10 sm:mb-14">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, y: direction * 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -direction * 15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[1.38] text-white tracking-normal font-sans max-w-3xl"
              >
                {current.quote}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Bottom Row: Author Attribution & Carousel Controls */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 border-t border-white/10">
            {/* Person Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-1"
              >
                <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                  {current.name}
                </span>
                <span className="text-xs sm:text-sm text-white/75 font-normal">
                  {current.function}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-3 self-end sm:self-auto">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous quote"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:bg-white/20 hover:border-white/60 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next quote"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:bg-white/20 hover:border-white/60 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
