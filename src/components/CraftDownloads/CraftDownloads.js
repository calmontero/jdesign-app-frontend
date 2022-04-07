import React from "react";
import { Table } from "react-bootstrap";
import IconButton from '@mui/material/IconButton';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import axios from 'axios';
import fileDownload from 'js-file-download';

function CraftDownloads() {
  function handleClick(url, filename) {
    //alert("Descargando archivo...");
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }

    return (
        <div className="craft-down">
            <h4>Lista de Descargas</h4>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Desripción</th>
              <th>Archivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Caketopper -</td>
              <td>
                <IconButton aria-label="download">
                  <DownloadForOfflineIcon onClick={() => handleClick('https://avatars.githubusercontent.com/u/9919?s=280&v=4', 'sample')}/>
                </IconButton >
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sticker -</td>
              <td>
                <IconButton aria-label="download">
                  <DownloadForOfflineIcon onClick={handleClick}/>
                </IconButton >
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Pascua -</td>
              <td>
                <IconButton aria-label="download">
                  <DownloadForOfflineIcon onClick={handleClick}/>
                </IconButton >
              </td>
            </tr>
          </tbody>
        </Table>
        </div>
    );
}

export default CraftDownloads;

