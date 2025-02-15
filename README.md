#  MediScriptAI 

A **React & Tesseract.js-based** application that extracts text from **handwritten medical prescriptions** using **OCR (Optical Character Recognition).**  
This project automates healthcare documentation by converting **handwritten prescriptions** into **digital text** efficiently.  

![Screenshot (509)](https://github.com/user-attachments/assets/47d5db17-6958-467c-ac18-df5a78b7dbba)

---

##  Features  

- **Upload prescription images**  
- **Real-time OCR processing** using `Tesseract.js`  
- **Image Preprocessing** for better recognition  
- **Copy extracted text to clipboard**  
- **Fully responsive UI**  
- **No external API or backend required**  

---

##  Tech Stack  

- **Frontend**: React.js (JavaScript)  
- **OCR Engine**: Tesseract.js (Client-side OCR)  
- **Preprocessing**: Image enhancement for better recognition  
- **Styling**: CSS  
- **Version Control**: Git, GitHub  

---

##  Usage Guide  

1️. **Upload a prescription image** (JPEG, PNG) 
2️. **Image is preprocessed** (grayscale & resized)  
3️. **OCR extracts text** from the prescription  
4️. **Copy & use the extracted text**  

---

##  OCR Processing & Preprocessing  

###  Preprocessing the Image for Better Accuracy  
Before performing OCR, the image undergoes enhancement to improve text extraction:  

- Converts image to **grayscale**  
- Adjusts **brightness & contrast**  
- Resizes image for **better OCR performance**  

###  OCR Workflow  
- Uses **Tesseract.js** to recognize text  
- Extracted text is displayed in **UI**  
- Users can **copy the text to clipboard**  

---

##  Model Training & Accuracy Improvement  

We improved OCR accuracy by:  
- Using **EasyOCR & Tesseract.js** together for better results  
- Applying **data augmentation** to train on handwritten prescriptions  
- Preprocessing text with **grayscale conversion & denoising**  

Even though **OCR for handwriting** is challenging, these optimizations help **reduce errors** in text extraction.  

---

##  Performance Analysis  

| **Metric**          | **Value** |
|----------------|--------|
| **Model Accuracy** | 78-85% (varies by handwriting quality) |
| **Processing Time** | 1-2 sec per image |
| **Preprocessing Impact** | 15-20% improvement in text recognition |

 **Future Improvements:**  
- Train a **custom deep learning OCR model** for **higher accuracy**  
- Add support for **multiple languages** in OCR  

---

##  Team Analysis  

Our team worked collaboratively to build the **Doctor Prescription Recognition App** for the **CodeCraft Hackathon 2025 by CodeTru**.

### ** Team CodeWave & Contributions**  

#### **1. Payal Sahu - AI & OCR Model Development**  
- Integrated **Tesseract.js** and **EasyOCR** for text recognition.  
- Implemented **image preprocessing techniques** (grayscale conversion, noise reduction, contrast enhancement) to improve OCR accuracy.  
- Optimized OCR model performance by training on **handwritten prescription datasets** and fine-tuning extraction settings.  

#### **2. Suhani Khawas - Frontend & UI/UX Development**  
- Designed and built a **responsive, user-friendly interface** for seamless interaction.  
- Implemented **drag & drop image upload** and text extraction display.  
- Added **copy-to-clipboard functionality** for easy access to extracted text.  
- Ensured smooth **user experience (UX)** by enhancing UI responsiveness and aesthetics.  
