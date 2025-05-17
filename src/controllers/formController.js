
const Form = require("../models/Form");




const createForm = async (req, res) => {
    try {
        const { form_name, medic_name, patient_name, questions, status, link} = req.body;

        const newForm = new Form({ form_name, medic_name, patient_name,status, questions, link });
        const saveForm = await newForm.save();

        res.status(201).json({ message: "Formulário criado com sucesso.", formId: saveForm._id });
    } catch (err) {
        console.log("erro: ", err)
        res.status(500).json({ error: "Erro ao criar formulário." });
    }
};

const getAllforms = async (req, res) => {

    try {
        
        const forms = await Form.find();

        return res.status(200).json(forms);

    } catch (error) {
        console.error("Erro ao buscar formulário. ", error);
        return res.status(500).json({ message: "Erro interno do servidor ao buscar os formuláris" })
    }
}

const getForm = async (req, res) => {

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


const updatedForm = async (req, res) =>  {

    try {

        console.log("entrou no updatedForm")

        const { id } = req.params;

        const { form_name, medic_name, patient_name, status, questions, link } = req.body;


        const updatedForm = await Form.findByIdAndUpdate(id, 
            {
                form_name: form_name,
                medic_name: medic_name,
                patient_name: patient_name,
                status: status,
                questions: questions,
                link: link
            },

            { new:true }
        )

        if (!updatedForm) {
            return res.status(404).json({ message: "Formulário não encontrado." });
        }

        res.status(200).json(updatedForm);

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar formulário." });
        
    }

}

module.exports = { createForm, getForm, updatedForm, getAllforms };
