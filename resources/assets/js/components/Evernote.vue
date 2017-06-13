<template>
    <div class="row">
        <div class="col-md-2">
            <div class="row">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">Notebooks</h3>
                        <div class="box-tools pull-right">
                            <b-button size="sm" variant="primary">Refresh</b-button>
                            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i class="fa fa-minus"></i></button>
                            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                <i class="fa fa-times"></i></button>
                        </div>
                    </div>
                    <div class="box-body" style="height: auto;">
                        <div v-for="stack in stacks">{{ stack }}
                            <div class="col-md-offset-1" :class="{ 'bg-primary': notebookActive == notebook.guid }" v-for="(notebook, nb_index) in notebooks" v-if="notebook.stack == stack" @click="get_notes(notebook)">{{ notebook.name }}<br /><span style="display:none;">{{ notebook.guid }}</span></div>
                        </div>
                        <!-- <div v-for="majorNotebook in notebooks" v-if="majorNotebook.stack == null">{{ majorNotebook }}</div> -->
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">Tags</h3>
                        <div class="box-tools pull-right">
                            <b-button size="sm" variant="primary">Refresh</b-button>
                            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i class="fa fa-minus"></i></button>
                            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                <i class="fa fa-times"></i></button>
                        </div>
                    </div>
                    <div class="box-body" style="height: auto">
                        <!-- <div v-for="text in testList">{{ text.text }}</div> -->
                        <!-- <div v-for="tag in limited_tags">{{ tag }}</div> -->
                        <div v-for="majorTag in orderedTags" v-if="majorTag.parentGuid == null"><input type="checkbox" alt="預留"> {{ majorTag.name }}
                            <div class="bg-secondary col-md-offset-1" v-for="minorTag in orderedTags" v-if="minorTag.parentGuid == majorTag.guid">
                                <input type="checkbox" alt="預留"> {{ minorTag.name }}
                                <div class="col-md-offset-1" v-for="microTag in orderedTags" v-if="microTag.parentGuid == minorTag.guid">
                                <input type="checkbox" alt="預留"> {{ microTag.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="row">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">Notes List</h3>
                        <div class="box-tools pull-right">
                            <b-button size="sm" variant="primary">No Function</b-button>
                            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i class="fa fa-minus"></i></button>
                            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                <i class="fa fa-times"></i></button>
                        </div>
                    </div>
                    <div class="box-body">
                        <div :class="{ 'bg-primary': noteActive == note.guid }" v-for="note in notes" @click="get_note(note)" >{{ note.title }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">{{ note.title }}</h3>
                        <div class="box-tools pull-right">
                            <b-button size="sm" variant="primary">Refresh</b-button>
                            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i class="fa fa-minus"></i></button>
                            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                <i class="fa fa-times"></i></button>
                        </div>
                    </div>
                    <div class="box-body" v-html="note.content">
                       <!-- {{ note.content }} -->
                    </div>                  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['evernote'],
        mounted() {
            console.log('Component evernote-tags mounted!')
            this.get_tags();
            this.get_notebooks();
            // console.log(this);
        },
        methods: {
            get_tags(){
                var self = this;                
                            // console.log('Component evernote-tags mounted!')
                var request = axios.get('./evernote/tags')
                    .then(function(response){
                        self.tags = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            get_notebooks(){
                var self = this;                
                var request = axios.get('./evernote/notebooks')
                    .then(function(response){
                        self.notebooks = response.data;
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            get_notes(notebook){
                this.notebookActive = notebook.guid;
                var self = this;                                
                var request = axios.get('./evernote/notebook/'+notebook.guid+'/notes')
                    .then(function(response) {
                        self.notes = response.data; 
                        console.log(self.notes);                       
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            get_note(note) {
                this.noteActive = note.guid;                
                var self = this;
                var request = axios.get('./evernote/note/'+note.guid)
                    .then(function(response) {
                        self.note = response.data; 
                        console.log(self.note);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
        },
        data() {            
            return {
                message: 'Hello, World! 20170506 added; npm run watch;',
                testList: [
                  { text: '我が名は恵みん！' },
                  { text: 'アークウィザードを生業とし、' },
                  { text: '最強の攻撃魔法、爆裂魔法を操る者！' },
                  { text: 'Explosion!!!!!!' },        
                ],
                tags: [],
                notebooks: [],
                notebookActive: '',
                notes: [],
                noteActive: '',
                note: { title: 'Title of Note', content: 'Empty.' },
            }
        },
        computed: {
            stacks() {
                return this.notebooks.map(function(notebook) { 
                    return notebook.stack 
                }).filter( (el, i, arr) => arr.indexOf(el) === i).sort();
            },
            limited_tags() {
                return this.tags.slice(0, 10);
            },
            orderedTags() {
                return _.orderBy(this.tags, 'name');
            },
            major_tags() {
                // var self = this;
                return this.tags.filter(function (tag) {
                    // console.log(tag.parentGuid.indexOf('b236e85d-d67b-4b86-a75f-7958cdb984bd'));
                    return tag.name.indexOf('北') !== -1;
                    // return tag.parentGuid.indexOf('b23') !== -1;
                });
                // console.log(this.tags[0].parentGuid.indexOf(null));
            },
            minor_tags() {

            },
        }
    }
</script>
