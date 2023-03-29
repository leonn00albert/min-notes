import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function TextEditor({handleChange, value}) {


  return <ReactQuill theme="snow"  value={value} onChange={handleChange} />;
}