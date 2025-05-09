import cx from 'classnames';
import React from 'react';

type TimelineItem = {
  align: 'left' | 'right';
  details: string[];
  duration: string;
  icon: string;
  institution: string;
  location: string;
  title: string;
};

const timelineData: TimelineItem[] = [
  {
    align: 'left',
    details: ["Dean's Honours List - Fall 2024"],
    duration: '2022 – Present',
    icon: '/icons/ontario-tech.png',
    institution: 'Ontario Tech University',
    location: 'Oshawa, ON',
    title: 'Honours Computer Science (H. BSc)',
  },
  {
    align: 'right',
    details: ['Ontario Scholar', '12th Grade: 96%'],
    duration: '2018 – 2022',
    icon: '/icons/rhhs.png',
    institution: 'Richmond Hill High School',
    location: 'Richmond Hill, ON',
    title: 'High School',
  },
];

// const Timeline: React.FC = () => (
//   <div className="relative bg-gray-900 px-4 py-16 text-white">
//     <div className="absolute left-1/2 z-0 hidden h-full w-1 -translate-x-1/2 transform bg-white md:block" />
//     <div className="relative z-10 grid grid-cols-2 gap-4 md:grid-cols-3">
//       {timelineData.map((item, index) => {
//         const isLeft = item.align === 'left';

//         return (
//           <React.Fragment key={index}>
//             {/* Left content (visible only if left aligned & desktop) */}
//             <div
//               className={`hidden md:block ${isLeft ? 'col-start-1' : 'col-start-1'}`}
//             ></div>

//             {/* Center column: icon and date */}
//             <div className="col-span-1 flex flex-col items-center">
//               {/* Line (mobile) */}
//               <div className="absolute top-0 bottom-0 left-4 h-full w-1 bg-white md:hidden" />

//               <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-gray-900 bg-white">
//                 <img alt="icon" className="h-6 w-6" src={item.icon} />
//               </div>
//               <p className="mt-2 text-sm text-gray-300">{item.duration}</p>
//             </div>

//             {/* Right content (mobile & desktop) */}
//             <div
//               className={`col-span-1 md:col-start-${isLeft ? '2' : '3'} flex justify-start md:justify-${isLeft ? 'end' : 'start'}`}
//             >
//               <div className="max-w-md rounded-md border-b-2 border-white bg-indigo-950 p-6 shadow-lg">
//                 <h3 className="text-lg font-bold">{item.title}</h3>
//                 <p className="text-sm text-gray-300">
//                   {item.institution}, {item.location}
//                 </p>
//                 <ul className="mt-2 list-inside list-disc text-sm text-gray-200">
//                   {item.details.map((detail, idx) => (
//                     <li key={idx}>{detail}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </React.Fragment>
//         );
//       })}
//     </div>
//   </div>
// );

const Card = ({ title }: { title: string }) => (
  <li className="my-12 flex">
    <div className="bg-coral-500 h-12 w-12 rounded-full" />
    <div className="bg-charcoal-400 ml-4 max-w-90 flex-1 rounded-sm p-2">
      <header>{title}</header>
      <p className="text-sm">Town, City, Country</p>
      <time className="text-[10px]">2023 - 2024</time>
    </div>
  </li>
);

const Item = ({ index, total }: { index: number; total: number }) => (
  <li className="grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_1fr] justify-items-center">
    {index !== 0 && <hr className="col-start-2 row-start-1 h-4 w-1 bg-white" />}

    <div className="bg-coral-500 col-start-2 row-start-2 size-10 rounded-full" />
    <div
      className={cx(
        index % 2 === 0
          ? 'col-start-3 col-end-4 justify-self-start'
          : 'col-start-1 col-end-2 justify-self-end text-right',
        'bg-charcoal-400 row-start-2 row-end-4 m-1 h-30 rounded-sm p-2',
      )}
    >
      <header>Content</header>
      <p className="text-sm">Town, City, Country</p>
      <time className="text-[10px]">2023 - 2024</time>
    </div>

    {index !== total - 1 && (
      <hr className="col-start-2 row-start-3 h-full w-1 bg-white" />
    )}
  </li>
);

const Timeline = () => {
  console.log('');
  return (
    <ul>
      <Item index={0} total={5} />
      <Item index={1} total={5} />
      <Item index={2} total={5} />
      <Item index={3} total={5} />
      <Item index={4} total={5} />
    </ul>
  );
  // return (
  //   <div className="relative mx-auto w-full max-w-4xl">
  //     {/* Línea central */}
  //     <div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-white"></div>

  //     <ol className="space-y-16">
  //       {/* Ítem 1 */}
  //       <li className="relative flex md:justify-start">
  //         {/* Contenido a la izquierda */}
  //         <div className="hidden w-1/2 pr-6 text-right md:block">
  //           <div className="inline-block rounded bg-gray-700 p-4 text-white shadow">
  //             <header className="font-bold">Item 1</header>
  //             <p className="text-sm">Town, City, Country</p>
  //             <time className="text-xs">2023 - 2024</time>
  //           </div>
  //         </div>

  //         {/* Círculo central */}
  //         <div className="absolute top-0 left-1/2 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-orange-400"></div>

  //         {/* Contenido en mobile */}
  //         <div className="mt-8 md:hidden">
  //           <div className="rounded bg-gray-700 p-4 text-white shadow">
  //             <header className="font-bold">Item 1</header>
  //             <p className="text-sm">Town, City, Country</p>
  //             <time className="text-xs">2023 - 2024</time>
  //           </div>
  //         </div>
  //       </li>

  //       {/* Ítem 2 */}
  //       <li className="relative flex md:justify-end">
  //         <div className="hidden w-1/2 pl-6 md:block">
  //           <div className="inline-block rounded bg-gray-700 p-4 text-white shadow">
  //             <header className="font-bold">Item 2</header>
  //             <p className="text-sm">Town, City, Country</p>
  //             <time className="text-xs">2023 - 2024</time>
  //           </div>
  //         </div>

  //         <div className="absolute top-0 left-1/2 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-orange-400"></div>

  //         <div className="mt-8 md:hidden">
  //           <div className="rounded bg-gray-700 p-4 text-white shadow">
  //             <header className="font-bold">Item 2</header>
  //             <p className="text-sm">Town, City, Country</p>
  //             <time className="text-xs">2023 - 2024</time>
  //           </div>
  //         </div>
  //       </li>

  //       {/* Ítem 3 */}
  //       <li className="relative flex md:justify-start">
  //         <div className="hidden w-1/2 pr-6 text-right md:block">
  //           <div className="inline-block rounded bg-gray-700 p-4 text-white shadow">
  //             <header className="font-bold">Item 3</header>
  //             <p className="text-sm">Town, City, Country</p>
  //             <time className="text-xs">2023 - 2024</time>
  //           </div>
  //         </div>

  //         <div className="absolute top-0 left-1/2 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-orange-400"></div>

  //         <div className="mt-8 md:hidden">
  //           <div className="rounded bg-gray-700 p-4 text-white shadow">
  //             <header className="font-bold">Item 3</header>
  //             <p className="text-sm">Town, City, Country</p>
  //             <time className="text-xs">2023 - 2024</time>
  //           </div>
  //         </div>
  //       </li>
  //     </ol>
  //   </div>
  // );
  return (
    // <div className="relative flex">
    //   <div className="absolute -z-1 h-full w-12">
    //     <div className="absolute left-1/2 h-full w-1 translate-x-[-50%] rounded-md bg-white" />
    //   </div>

    //   <ol className="flex-1">
    //     <Card title="Item 1" />
    //     <Card title="Item 2" />
    //     <Card title="Item 3" />
    //   </ol>
    // </div>
    <div className="flex flex-col">
      <div className="absolute left-1/2 -z-1 h-full w-12">
        <div className="absolute left-1/2 h-full w-1 translate-x-[-50%] rounded-md bg-white" />
      </div>

      <ol className="flex-1">
        <Card title="Item 1" />
        <Card title="Item 2" />
        <Card title="Item 3" />
      </ol>
    </div>
  );
};

export default Timeline;
