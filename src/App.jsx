// App.js
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './Pdf';

const App = () => (
  <div>
    <h2>PDF with Image</h2>
    <PDFDownloadLink document={<MyDocument />} fileName="logo-pdf.pdf">
      {({ loading }) => (loading ? 'Loading PDF...' : 'Download PDF')}
    </PDFDownloadLink>
  </div>
);

export default App;
