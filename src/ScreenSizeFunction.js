import React,{useState,useEffect} from "react";

export const useScreenResizeValue = (arr) => {
    const [screenValue, setScreenValue] = useState(null);
   
  
    useEffect(() => {
      const handleResize = () => {
        let newScreenValue = 0;
  

        for(let i = 0;i<arr.length-1;i++){
           
            if((window.innerWidth > arr[i])&&(window.innerWidth <= arr[i+1])){
                newScreenValue = arr[i+1];
            }
        }


        if(window.innerWidth <= arr[0]){
            newScreenValue = arr[0];
        }


        if(window.innerWidth > arr[arr.length-1]){
            newScreenValue = arr[arr.length-1]+1;
        }

        
       

        setScreenValue(newScreenValue);
      };
  
      handleResize(); // Set the initial screen size value
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return screenValue;
  };