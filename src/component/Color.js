import React, { useEffect, useState } from 'react';

const Color = () => {

    const [width, setWidth ] = useState(window.innerWidth);
    const [background, setBackground ] = useState('#29C7AC')

    useEffect(() => {

        const changeWidth = () => setWidth(window.innerWidth);
        window.addEventListener('resize', changeWidth);
        return () => window.removeEventListener('resize', changeWidth);

    }, []);



    useEffect(() => {

        const checkMousePosition = e => {
            if(width / 2 > e.x){
                setBackground('#29C7AC');
            }else{
                setBackground('#368B85');
            }
        };


        window.addEventListener('mousemove', checkMousePosition);
        return () => window.removeEventListener('mousemove', checkMousePosition);

    }, [ width ]);
    

    const styles = {
        height: '300px',
        background: background,
        
    }
    
    return (
        <div style={styles}>
            <h3 className='tittle'>
                Hello World 
            </h3>
            
        </div>
    );
};

export default Color;