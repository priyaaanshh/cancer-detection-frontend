"use client";

import React, { useRef, useState, CSSProperties } from 'react'
import ClockLoader from "react-spinners/ClockLoader";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';



const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File>();
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
    } else {
      console.log('Please drop an image file.');
    }
  };

  const handleUpload = async () => {
    try {
      setUploading(true);
    } catch (error) {
      console.log(error)
    } finally {
      setUploading(false);
    }
  }
  return (
    <div className='flex items-start sm:justify-center sm:items-center h-full px-2 mt-[70px] sm:mt-0'>
      <div className="flex flex-col sm:flex-row gap-5 justify-between w-full max-w-[1440px] mb-10">
        <div className='flex justify-center w-full'>
          <Card className='w-full shadow'
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}>
            <CardHeader>
              <CardTitle>Upload Images</CardTitle>
              <CardDescription className='text-md sm:text-xl'>We&apos;ll predict wether you&apos;ve cancer or not...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col justify-center items-center gap-5 py-4 min-h-[300px] sm:min-h-[550px] px-5 border-dashed border-4 rounded-2xl'>
                <h1 className='text-2xl sm:text-3xl'>Drag and drop image</h1>
                <h3 className='text-xl sm:text-2xl'>or</h3>

                {file && <div className='relative bg-secondary p-3 rounded-xl'>
                  <div className="absolute -top-3 -right-3 bg-secondary-foreground rounded-full cursor-pointer" onClick={() => setFile(undefined)}><X className='text-primary-foreground' /></div>
                  <img src={URL.createObjectURL(file)} alt='' className='h-40 object-contain rounded overflow-hidden my-4' />
                </div>
                }
                <div className="flex justify-center items-center gap-5">

                  {!file && <Button onClick={() => {
                    inputRef.current?.click();
                  }}><ClockLoader
                      color='#fff'
                      size={25}
                      loading={false}
                      cssOverride={override}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                    Choose from files
                  </Button>}
                  {file && <Button onClick={handleUpload}>
                    Upload
                  </Button>}
                  <input
                    className='hidden'
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={(e) => {
                      const uploadedFile = e.target.files?.[0];
                      if (uploadedFile) {
                        setFile(uploadedFile);
                      }
                    }}
                  />
                  {file && <Button variant="secondary" onClick={() => setFile(undefined)}>Cancel</Button>}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='flex w-full'>
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Results Here</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col space-y-3'>
                <Skeleton className="h-[300px] w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-7 w-5/6" />
                  <Skeleton className="h-7 w-3/4" />
                  <Skeleton className="h-7 w-1/2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home
