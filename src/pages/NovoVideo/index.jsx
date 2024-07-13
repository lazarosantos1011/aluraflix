import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './NovoVideo.css';
import categoryData from '../../Data/CategoryData';
import { validateForm } from '../../utils/ValidateForm';
import OptionList from '../../components/OptionList';
import { useVideoContext } from '../../contexts/VideoContext';
import FormButton from '../../components/BotaoForm';
import Notification from '../../components/Notification';
import ConfirmationDialog from '../../components/confirmationDialog/ConfirmationDialog';

const NovoVideo = () => {
    const { addVideo } = useVideoContext();
    const initialFormData = {
        title: '',
        category: '',
        photo: '',
        link: '',
        description: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({
        title: false,
        category: false,
        photo: false,
        link: false,
        description: false,
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const descriptionRef = useRef(null);
    const navigateTo = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        validateFormAndSetErrors();
    }, [formData]);

    const validateFormAndSetErrors = async () => {
        const formErrors = await validateForm(formData);
        setErrors(formErrors);
        setIsButtonDisabled(Object.keys(formErrors).length > 0 || !isFormFilled(formData));
    };

    const isFormFilled = (formData) => {
        return (
            formData.title.trim() !== '' &&
            formData.category.trim() !== '' &&
            formData.photo.trim() !== '' &&
            formData.link.trim() !== '' &&
            formData.description.trim() !== ''
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFieldBlur = (field) => {
        setTouchedFields({ ...touchedFields, [field]: true });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        await validateFormAndSetErrors();
        if (isFormFilled(formData) && Object.keys(errors).length === 0) {
            setShowConfirmation(true); 
        }
    };

    const handleConfirmSave = () => {
        addVideo(formData);
        setNotificationMessage('Vídeo salvo com sucesso!');
        setShowConfirmation(false);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
            navigateTo('/');
        }, 3000); 
    };

    const handleCancelSave = () => {
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setErrors({});
        setTouchedFields({
            title: false,
            category: false,
            photo: false,
            link: false,
            description: false,
        });
    };

    return (
        <div className="new-video-page">
            <div className="container__new-video">
                <header className="new-video__header">
                    <h1 className="new-video__title">NOVO VÍDEO</h1>
                    <p className="new-video__description">
                        COMPLETE O FORM PARA ADICIONAR UM NOVO CARD DE VÍDEO NA HOME
                    </p>
                </header>
                <form className="new-video__form" onSubmit={handleSave}>
                    <div className="form-section">
                        <div className="form-section__left">
                            <h2 className="new-video__form-title">Criar Card</h2>
                        </div>
                    </div>
                    <div className="form-section">
                        <div className="form-section__left">
                            <label className={`new-video__form-label ${errors.title && touchedFields.title ? 'error-label' : ''}`}>
                                Título:
                                <input
                                    className={`new-video__form-input ${errors.title && touchedFields.title ? 'error' : ''}`}
                                    type="text"
                                    placeholder='Digite o título do vídeo'
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    onBlur={() => handleFieldBlur('title')}
                                    maxLength="200"
                                    required
                                />
                                {errors.title && touchedFields.title && <span className="error-message">{errors.title}</span>}
                            </label>
                        </div>
                        <div className="form-section__right">
                            <OptionList
                                classe={`new-video__form-input new-video__form-option ${errors.category && touchedFields.category ? 'error-label' : ''}`}
                                classe2='new-video__dropdown-option'
                                value={formData.category}
                                onChange={(e) => {
                                    handleChange({ target: { name: 'category', value: e.target.value } });
                                    handleFieldBlur('category');
                                }}
                                options={categoryData}
                            />
                            {errors.category && touchedFields.category && <span className="error-message">{errors.category}</span>}
                        </div>
                    </div>
                    <div className="form-section">
                        <div className="form-section__left">
                            <label className={`new-video__form-label ${errors.photo && touchedFields.photo ? 'error-label' : ''}`}>
                                Imagem/Thumbnail:
                                <input
                                    className={`new-video__form-input ${errors.photo && touchedFields.photo ? 'error' : ''}`}
                                    type="url"
                                    placeholder='Digite o link da imagem/thumbnail'
                                    name="photo"
                                    value={formData.photo}
                                    onChange={handleChange}
                                    onBlur={() => handleFieldBlur('photo')}
                                    maxLength="180"
                                    required
                                />
                                {errors.photo && touchedFields.photo && <span className="error-message">{errors.photo}</span>}
                            </label>
                        </div>
                        <div className="form-section__right">
                            <label className={`new-video__form-label ${errors.link && touchedFields.link ? 'error-label' : ''}`}>
                                Vídeo:
                                <input
                                    className={`new-video__form-input ${errors.link && touchedFields.link ? 'error' : ''}`}
                                    type="url"
                                    placeholder='Digite o link do vídeo'
                                    name="link"
                                    value={formData.link}
                                    onChange={handleChange}
                                    onBlur={() => handleFieldBlur('link')}
                                    maxLength="180"
                                    required
                                />
                                {errors.link && touchedFields.link && <span className="error-message">{errors.link}</span>}
                            </label>
                        </div>
                    </div>
                    <div className="form-section">
                        <div className="form-section__left">
                            <label className={`new-video__form-label ${errors.description && touchedFields.description ? 'error-label' : ''}`}>
                                Descrição:
                                <textarea
                                    className={`new-video__form-input new-video__form-textarea ${errors.description && touchedFields.description ? 'error' : ''}`}
                                    name="description"
                                    placeholder='Sobre o que é este vídeo?'
                                    value={formData.description}
                                    onChange={handleChange}
                                    onBlur={() => handleFieldBlur('description')}
                                    ref={descriptionRef}
                                    rows="4"
                                    maxLength="300"
                                    required
                                />
                                {errors.description && touchedFields.description && <span className="error-message">{errors.description}</span>}
                            </label>
                        </div>
                    </div>
                    <div className="new-video__form-buttons">
                        <FormButton
                            type="submit"
                            label="SALVAR"
                            disabled={isButtonDisabled}
                            buttonType="form-button--save"
                        />
                        <FormButton
                            type="button"
                            label="LIMPAR"
                            onClick={handleCancel}
                            buttonType="form-button--cancel"
                        />
                    </div>
                </form>
            </div>
            {showNotification && (
                <Notification
                    message={notificationMessage}
                    onClose={() => setShowNotification(false)}
                />
            )}
            {showConfirmation && (
                <ConfirmationDialog
                    message={"Quer mesmo salvar este vídeo?"}
                    onConfirm={handleConfirmSave}
                    onCancel={handleCancelSave}
                />
            )}
        </div>
    );
}

export default NovoVideo;
