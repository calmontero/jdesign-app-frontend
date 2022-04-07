import React from "react";
import axios from 'axios';
import fileDownload from 'js-file-download';

function Downloader() {
    const handleClick = (url, filename) => {
        axios.get(url, {
          responseType: 'blob',
        })
        .then((res) => {
          fileDownload(res.data, filename)
        })
      }
    return (
        <div className="App">
        <button onClick={() => handleClick('https://i.ibb.co/Y0n8xKk/', 'Img-02.jpg')}>
        Download the File</button>
      </div>
    );
}

export default Downloader;