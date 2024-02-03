<template>
    <li class="card">
        <h2 :class="['title', index === 0 ? 'white_color' : '']">
            {{ title }}
        </h2>
        <p :class="['text', index === 0 ? 'white_color' : '']">
            {{ text }}
        </p>
        <div class="date_box">
            <div class="date_icon_box">
                <img class="date_icon" alt="Дата" src="@/assets/images/calendar-icon.svg" />
                <span class="date_text"> {{ newDate.toLocaleDateString('ro-RO') }} </span>
            </div>

            <div class="date_icon_box">
                <img class="date_icon" alt="Время" src="@/assets/images/clock-icon.svg" />
                <span class="date_text"> {{ `${newDate.getHours('ro-RO')}:${newDate.getMinutes('ro-RO')}` }} </span>
            </div>
        </div>

    </li>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Загаловок"
        },
        text: {
            type: String,
            default: "Текст..."
        },
        date: {
            type: String,
            default: new Date
        },
        index: {
            type: Number,
            default: 0
        }
    },
    
    setup (props) {
        const newDate = new Date(props.date)
        return {
            newDate
        }
    }
}

</script>

<style lang="scss" scoped>
.card {
    height: 580px;
    border-radius: 20px;
    background-color: white;
    padding: 70px 40px 70px 30px;
}

.title {
    @extend %text-middle;
    font-size: 42px;
}

.text {
    @extend %text-small
}
.date_box {
    display: flex;
    justify-content: space-between;
}
.date_icon_box {
    display: flex;
    align-items: center;
    gap: 10px;
}
.date_text {
    color: #88A1DE
}
.date_icon {
    width: 24px;
    height: 24px;
}

.card:nth-child(1) {
    background-color: #050F28;
}


.white_color {
    color: white;
}
</style>