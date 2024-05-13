import React, { useState, useRef } from 'react';
import axios from 'axios';
import { MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn, MDBCardImage } from 'mdb-react-ui-kit';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaIdCard, FaComment, FaFileAlt, FaQuestionCircle, FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

function Demand() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [cin, setCin] = useState('');
  const [ice, setIce] = useState('');
  const [demandType, setDemandType] = useState('');
  const [message, setMessage] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showOtherField, setShowOtherField] = useState(false);

  const fileInputRef = useRef(null);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setDemandType(selectedType);
    setShowOtherField(selectedType === 'autre');
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...fileList]);
  };

  const handleFileRemove = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleIceChange = (event) => {
    setIce(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('prenom', prenom);
    formData.append('email', email);
    formData.append('tel', telephone);
    formData.append('cin', cin);
    formData.append('num_ice', ice);

    const selectedType = demandType === 'autre' ? document.getElementById('autreDemandeText').value : demandType;
    formData.append('type_demande', selectedType);

    formData.append('message', message);

    uploadedFiles.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await axios.post('http://localhost:9090/api/v1/demandeur/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Réponse du serveur :', response.data);

      // Réinitialiser les états après l'envoi du formulaire
      setNom('');
      setPrenom('');
      setEmail('');
      setTelephone('');
      setCin('');
      setIce('');
      setDemandType('');
      setMessage('');
      setUploadedFiles([]);
      setShowOtherField(false);

      // Ajouter d'autres actions après la soumission réussie du formulaire si nécessaire
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la requête :', error);
      // Gérer les erreurs ici
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">Saisir vos Informations</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nom">Nom*</label>
                  <MDBInput id='nom' type='text' value={nom} onChange={(e) => setNom(e.target.value)} required />

                  <label htmlFor="prenom">Prénom*</label>
                  <MDBInput id='prenom' type='text' value={prenom} onChange={handlePrenomChange} required />

                  <label htmlFor="email">Adresse email*</label>
                  <MDBInput id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                  <label htmlFor="telephone">Numéro de téléphone*</label>
                  <MDBInput id='telephone' type='tel' value={telephone} onChange={(e) => setTelephone(e.target.value)} required />

                  <label htmlFor="cin">CIN*</label>
                  <MDBInput id='cin' type='text' value={cin} onChange={(e) => setCin(e.target.value)} required />

                  <label htmlFor="numSiret">ICE* :</label>
                  <MDBInput id='numSiret' type='text' value={ice} onChange={handleIceChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="typeDemande"><FaQuestionCircle /> Type de Demande*</label>
                  <select id="typeDemande" name="typeDemande" className="form-control" onChange={handleTypeChange} required>
                    <option value="">Sélectionner...</option>
                    <option value="réclamation">Réclamation</option>
                    <option value="partenariat">Partenariat commercial</option>
                    <option value="support">Support technique</option>
                    <option value="autorisation">Autorisation</option>
                    <option value="autre">Autre...</option>
                  </select>

                  {showOtherField && (
                    <MDBInput id='autreDemandeText' type='text' label='Précisez le type de demande*' required />
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message"><FaComment /> Message*</label>
                  <textarea id="message" type='textarea' value={message} onChange={(e) => setMessage(e.target.value)} rows="10" required></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor='files'><FaFileAlt /> Documents* (pdf, jpg, png)</label>
                  <input type='file' id='files' name='file' multiple accept='.pdf, .jpg, .png, .jpeg' onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} />
                  <MDBBtn onClick={handleBrowseClick} color="primary" className="my-2" style={{ width: '200px', height: '50px' }}>
                    <FaFileAlt className="me-1" /> Ajouter des fichiers
                  </MDBBtn>

                  {uploadedFiles.length > 0 && (
                    <div>
                      <p>Fichiers téléchargés :</p>
                      <ul>
                        {uploadedFiles.map((file, index) => (
                          <li key={index}>
                            <span>{file.name}</span>
                            <FaCheck style={{ marginLeft: '5px', color: 'green' }} />
                            <MDBBtn size="sm" onClick={() => handleFileRemove(index)} className="mx-2" color="danger" style={{ width: '120px', height: '40px' }}>
                              <FaTrash />
                            </MDBBtn>
                            <MDBBtn size="sm" className="mx-2" color="primary" href={URL.createObjectURL(file)} download style={{ width: '180px', height: '40px' }}>
                              <MDBIcon icon={<FaFileAlt />} /> Télécharger
                            </MDBBtn>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <MDBBtn type="submit" className='mb-4' size='lg' color='success' style={{ width: '200px', height: '60px' }}>
                  Envoyer
                </MDBBtn>
              </form>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://th.bing.com/th/id/R.925e11418932f2c09917532fcb6f96f0?rik=MYCJgax0bLTjoA&pid=ImgRaw&r=0' fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Demand;
