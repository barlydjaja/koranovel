import React, {useEffect, useState} from 'react';

const CloudImageLoader = ({src, width, quality}) => {
    const [domainName, setDomainName] = useState("")
    useEffect(()=>{
        setDomainName(window.location.hostname)
    }, [])
    return (`${src}?w=${width}&q=${quality || 75}`);
};

export default CloudImageLoader;
