import React, { useEffect, useState } from 'react';
import email from './logics/logic';
import Paittle from './Paittle';
import TitleSection from './TitleSection';
import EmailTemplateCanvas from './EmailTemplateCanvas';


const MainBody = (props: any) => {
  const [mailData, setMailData] = useState(email);
  const [isFocusTitle, setIsFocusTitle] = useState(false);
  const [isFocusAuthor, setIsFocusAuthor] = useState(false);
  const [isFocusContent, setIsFocusContent] = useState(false);
  const [isFocusImage, setIsFocusImage] = useState(false);

  useEffect(() => {
    return () => {
      setMailData((prevMailData) => ({
        ...prevMailData,
        title: {
          ...prevMailData.title,
          data: localStorage.getItem('emailTitle') ?? prevMailData.title.data,
          color: localStorage.getItem('emailTitleColor') ?? prevMailData.title.color,
          font: localStorage.getItem('emailTitleFont') ?? prevMailData.title.font,
        },
        content: {
          ...prevMailData.content,
          data: localStorage.getItem('emailContent') ?? prevMailData.content.data,
          color: localStorage.getItem('emailContentColor') ?? prevMailData.content.color,
          font: localStorage.getItem('emailContentFont') ?? prevMailData.content.font,
        },
        author: {
          ...prevMailData.author,
          data: localStorage.getItem('emailAuthor') ?? prevMailData.author.data,
          color: localStorage.getItem('emailAuthorColor') ?? prevMailData.author.color,
          font: localStorage.getItem('emailAuthorFont') ?? prevMailData.author.font,
        },
        image: {
          ...prevMailData.image,
          data: localStorage.getItem('emailImage') ?? prevMailData.image.data,
        },
      }));
    };
  }, []);


  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailData((prev) => ({
      ...prev,
      title: { ...prev.title, data: e.target.value },
    }));
    localStorage.setItem('emailTitle', e.target.value);
  };

  const updateContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailData((prev) => ({
      ...prev,
      content: { ...prev.content, data: e.target.value },
    }));
    localStorage.setItem('emailContent', e.target.value);
  };

  const updateAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailData((prev) => ({
      ...prev,
      author: { ...prev.author, data: e.target.value },
    }));
    localStorage.setItem('emailAuthor', e.target.value);
  };

  const updateImage = (imgURL: string) => {
    setMailData((prev) => ({
      ...prev,
      image: { ...prev.image, data: imgURL },
    }));
    localStorage.setItem('emailImage', imgURL);
  };

  const updateFont = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFocusTitle) {
      setMailData((prev) => ({
        ...prev,
        title: { ...prev.title, font: e.target.value },
      }));
      localStorage.setItem('emailTitleFont', e.target.value);
    } else if (isFocusContent) {
      setMailData((prev) => ({
        ...prev,
        content: { ...prev.content, font: e.target.value },
      }));
      localStorage.setItem('emailContentFont', e.target.value);
    } else if (isFocusAuthor) {
      setMailData((prev) => ({
        ...prev,
        author: { ...prev.author, font: e.target.value },
      }));
      localStorage.setItem('emailAuthorFont', e.target.value);
    }
  };
  const updateColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFocusTitle) {
      setMailData((prev) => ({
        ...prev,
        title: { ...prev.title, color: e.target.value },
      }));
      localStorage.setItem('emailTitleColor', e.target.value);
    } else if (isFocusContent) {
      setMailData((prev) => ({
        ...prev,
        content: { ...prev.content, color: e.target.value },
      }));
      localStorage.setItem('emailContentColor', e.target.value);
    } else if (isFocusAuthor) {
      setMailData((prev) => ({
        ...prev,
        author: { ...prev.author, color: e.target.value },
      }));
      localStorage.setItem('emailAuthorColor', e.target.value);
    }
  };


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        updateImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


  // Handling Backend API to download template...
  useEffect(() => {
    if (props.isDownloadClicked == true) {

      fetch("http://localhost:3000/downloadTemplate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then((htmlContent) => {
          // Process the HTML response (e.g., save it or render it)
          // console.log(htmlContent);
          // Now savoing the generated email template...
          // Create a Blob from the HTML string
          const blob = new Blob([htmlContent], { type: "text/html" });

          // Generate a downloadable link
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = mailData.title.data;

          // Programmatically click the link to trigger the download
          link.click();

          // Clean up the URL object
          URL.revokeObjectURL(link.href);
        })
        .catch((error) => {
          console.error("Error:", error);
        });



      props.setIsDownloadClicked(false);
    }
  }, [props.isDownloadClicked]);

  return (
    <div className='bg-black d-flex flex-column'>
      <TitleSection mailData={mailData} />
      <div className="main-section w-100 p-2 d-flex flex-column flex-md-row justify-content-md-between">
        <EmailTemplateCanvas
          mailData={mailData}
          isFocusTitle={isFocusTitle}
          isFocusAuthor={isFocusAuthor}
          isFocusContent={isFocusContent}
          isFocusImage={isFocusImage}
          setIsFocusImage={setIsFocusImage}
          setIsFocusTitle={setIsFocusTitle}
          setIsFocusContent={setIsFocusContent}
          setIsFocusAuthor={setIsFocusAuthor}
          updateTitle={updateTitle}
          updateAuthor={updateAuthor}
          updateContent={updateContent}
          handleImageChange={handleImageChange}
          updateFont={updateFont}
          updateColor={updateColor} />
        <Paittle
          mailData={mailData}
          isFocusTitle={isFocusTitle}
          isFocusAuthor={isFocusAuthor}
          isFocusContent={isFocusContent}
          isFocusImage={isFocusImage}
          setIsFocusImage={setIsFocusImage}
          setIsFocusTitle={setIsFocusTitle}
          setIsFocusContent={setIsFocusContent}
          setIsFocusAuthor={setIsFocusAuthor}
          updateTitle={updateTitle}
          updateAuthor={updateAuthor}
          updateContent={updateContent}
          handleImageChange={handleImageChange}
          updateFont={updateFont}
          updateColor={updateColor}

        />
      </div>
    </div>
  )
}

export default MainBody
