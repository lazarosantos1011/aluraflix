export const validateForm = async (formData) => {
    const errors = {};

    const trimmedFormData = {};
    for (const key in formData) {
        trimmedFormData[key] = formData[key] ? formData[key].toString().trim() : '';
    }

    const URLInvalida = "A URL inserida não é válida.";
    const CampoVazio = "Este campo é obrigatório.";

    if (!trimmedFormData.title) {
        errors.title = CampoVazio;
    } else if (trimmedFormData.title.length < 3) {
        errors.title = 'O título deve ter no mínimo 3 caracteres.';
    } else if (trimmedFormData.title.length > 150) {
        errors.title = 'O título deve ter no máximo 150 caracteres.';
    }

    if (!trimmedFormData.category) {
        errors.category = 'É necessário selecionar a categoria.';
    }

    if (!trimmedFormData.photo) {
        errors.photo = CampoVazio;
    } else if (!isPhotoURLValid(trimmedFormData.photo)) {
        errors.photo = URLInvalida;
    }

    if (!trimmedFormData.link) {
        errors.link = CampoVazio;
    } else if (!isVideoURLValid(trimmedFormData.link)) {
        errors.link = URLInvalida;
    }

    if (!trimmedFormData.description) {
        errors.description = CampoVazio;
    } else if (trimmedFormData.description.length < 3) {
        errors.description = 'A descrição deve ter no mínimo 3 caracteres.';
    } else if (trimmedFormData.description.length > 300) {
        errors.description = 'A descrição deve ter no máximo 300 caracteres';
    }

    return errors;
};

const isPhotoURLValid = (url) => {
    const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
    return photoUrlPattern.test(url);
};

const isVideoURLValid = (url) => {
    const videoUrlPattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?si=[a-zA-Z0-9_-]+$/;
    return videoUrlPattern.test(url);
};
