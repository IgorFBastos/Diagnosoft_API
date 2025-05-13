
const Form = require("../models/Form");

const createForm = async (req, res) => {
    try {
        const { form_name, medic_name, patient_name, questions } = req.body;

        const newForm = new Form({ form_name, medic_name, patient_name, questions });
        const saveForm = await newForm.save();

        res.status(201).json({ message: "Formulário criado com sucesso.", formId: saveForm._id });
    } catch (err) {
        console.log("erro: ", err)
        res.status(500).json({ error: "Erro ao criar formulário." });
    }
};

const listForm = async (req, res) => {

    try {

        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: "ID do form não foi fornecido corretamente." });
        }
        const form = await Form.findById(id);
        if (!form) {
            return res.status(404).json({ message: "Formulário não encontrado" })
        }
        return res.status(200).json(form);

    } catch (error) {

        console.error("Erro ao buscar formulário. ", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar o formulário" })
    }
}

module.exports = { createForm, listForm };
