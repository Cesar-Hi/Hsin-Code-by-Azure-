const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const GIF_MAP = {
    vui: 'https://media.giphy.com/media/artj92V8o75VPL7AeQ/giphy.gif',
    buon: 'https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif',
    chao: 'https://media.giphy.com/media/mGcNjsfWAjY5AEZNw6/giphy.gif',
    om: 'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif'
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Gửi ảnh GIF tương ứng theo cảm xúc')
        .addStringOption(option =>
            option.setName('loai')
                .setDescription('Chọn loại GIF bạn muốn gửi')
                .setRequired(true)
                .addChoices(
                    { name: 'Vui vẻ', value: 'vui' },
                    { name: 'Buồn bã', value: 'buon' },
                    { name: 'Chào hỏi', value: 'chao' },
                    { name: 'Ôm', value: 'om' }
                )
        ),

    async execute(interaction) {
        const loai = interaction.options.getString('loai');
        const url = GIF_MAP[loai];

        const embed = new EmbedBuilder()
            .setTitle(`Ảnh GIF: ${loai.toUpperCase()}`)
            .setImage(url)
            .setColor(0x5865F2);

        await interaction.reply({ embeds: [embed] });
    },
};
