function obterAlunos() {
    return JSON.parse(localStorage.getItem("alunos")) || [];
}

function salvarAlunos(alunos) {
    localStorage.setItem("alunos", JSON.stringify(alunos));
}

function carregarAlunos() {
    const lista = document.getElementById("lista-alunos");
    lista.innerHTML = "";

    const alunos = obterAlunos();

    alunos.forEach((aluno, index) => {
        const idade = calcularIdade(aluno.dataNascimento);

        const linha = `
            <tr>
                <td>${aluno.matricula}</td>
                <td>${aluno.nome}</td>
                <td>${idade}</td>
                <td>${aluno.email}</td>
                <td>${aluno.curso}</td>
                <td>
                    <button class="acao-btn" onclick="excluirAluno(${index})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;

        lista.innerHTML += linha;
    });
}

function cadastrarAluno() {
    const matricula = document.getElementById("matricula").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value;
    const email = document.getElementById("email").value.trim();
    const curso = document.getElementById("curso").value.trim();

    if (!matricula || !nome || !dataNascimento || !email || !curso) {
        alert("Preencha todos os campos.");
        return;
    }

    const alunos = obterAlunos();

    const aluno = {
        matricula,
        nome,
        dataNascimento,
        email,
        curso
    };

    alunos.push(aluno);
    salvarAlunos(alunos);

    document.getElementById("form-aluno").reset();

    carregarAlunos();
}

function excluirAluno(index) {
    const alunos = obterAlunos();

    alunos.splice(index, 1);

    salvarAlunos(alunos);
    carregarAlunos();
}

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}