

const vueApp = Vue.createApp({
    data() {
        return {
            pageTitle: 'Gallery',
            projects: [],
        };
    },
    methods: {
        openModal(index) {
            const modalId = '#carouselModal' + index;
            const modalEl = document.querySelector(modalId);
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        },
        toggleDescription(index) {
            this.projects[index].showDescription = !this.projects[index].showDescription;
        },
        async fetchProjects() {
            const res = await fetch('projects.json');
            const data = await res.json();

            // Ensure each project has a description and toggle state
            data.forEach(project => {
                if (!Array.isArray(project.description)) {
                    project.description = [];
                }
                project.showDescription = false;
            });

            this.projects = data;
        }
    },
    mounted() {
        this.fetchProjects();
    }
});

vueApp.mount('#vue_app');

