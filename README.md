# MediScriptAI  

 **Project developed for CodeCraft Hackathon 2025 by CodeTru**  

This project focuses on **handwritten prescription recognition** using **OCR technology**. It extracts text from uploaded medical prescriptions, making them readable and accessible.  

![Screenshot (509)](https://github.com/user-attachments/assets/934d406c-4563-40a3-b4fa-ff8b36cc0043)

---

##  Usage Guide  

1️⃣ **Upload a prescription image** (JPEG, PNG)  
2️⃣ **Image is preprocessed** (grayscale & resized)  
3️⃣ **OCR extracts text** from the prescription  
4️⃣ **Copy & use the extracted text**  

---

##  OCR Processing & Preprocessing  

### 🔹 Preprocessing the Image for Better Accuracy  
Before performing OCR, the image undergoes enhancement to improve text extraction:  

✅ Converts image to **grayscale**  
✅ Adjusts **brightness & contrast**  
✅ Resizes image for **better OCR performance**  

### 🔹 OCR Workflow  
- Uses **Tesseract.js** to recognize text  
- Extracted text is displayed in **UI**  
- Users can **copy the text to clipboard**  

---

##  Model Training & Accuracy Improvement  

We improved OCR accuracy by:  
🔹 Using **EasyOCR & Tesseract.js** together for better results  
🔹 Applying **data augmentation** to train on handwritten prescriptions  
🔹 Preprocessing text with **grayscale conversion & denoising**  

##  Team Analysis  

Our team worked collaboratively to build the **Doctor Prescription Recognition App** for the **CodeCraft Hackathon 2025 by CodeTru**. Each member played a crucial role in different aspects of the project, ensuring a successful and well-rounded solution.  

### **Team Members & Contributions**  

#### **🔹Payal Sahu - AI & OCR Model Development**  
- Integrated **Tesseract.js** and **EasyOCR** for text recognition.  
- Implemented **image preprocessing techniques** (grayscale conversion, noise reduction, contrast enhancement) to improve OCR accuracy.  
- Optimized OCR model performance by training on **handwritten prescription datasets** and fine-tuning extraction settings.  

#### **🔹Suhani Khawas - Frontend & UI/UX Development**  
- Designed and built a **responsive, user-friendly interface** for seamless interaction.  
- Implemented **drag & drop image upload** and text extraction display.  
- Added **copy-to-clipboard functionality** for easy access to extracted text.  
- Ensured smooth **user experience (UX)** by enhancing UI responsiveness and aesthetics.  
