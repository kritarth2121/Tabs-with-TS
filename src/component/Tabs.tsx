import { Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

interface Props{
children : React.ReactElement[];
}

const Tabs:React.FC<Props>=(props) => {
    const[selectedIndex,setSelectedIndex] = useState(0);

    const tabWidth = 100 / props.children.length;
    return(
        <>
        <div className="bg-green-50 ">        
          <div className="relative max-w-lg mx-auto pb-1">
            <div className="flex text-xl font-bold ">
            {props.children.map((child , index) =>
            {return <div className="flex-1 px-2 py-4 text-center cursor-pointer " onClick={()=> {
              setSelectedIndex(index)
            }}> {child.props.title}
            <span className="text-xs text-yellow-200">★</span> 
            </div>

            })}
          </div>

          <div className="absolute h-1 bg-green-700 duration-1000 ease-in-out w-1/4 " style={{width :tabWidth+"%", left:(tabWidth*selectedIndex) +"%"}}>
          </div>
          </div>
        </div>
        <div className="relative bg-green-100 ">
                     {props.children.map((child ,index) =>
            {
              return <Transition as={Fragment} 
              show={index === selectedIndex}
              enter="trasition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="trasition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0" 
              >
                <div className="bg-blue-100 absolute top-0 left-0 right-0 px-2 py-4">
                  {child}
                </div>
                </Transition>
            })}
            
        </div>
        </>
    );

}

Tabs.defaultProps={
    
}
export default React.memo(Tabs);