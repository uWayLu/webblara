<template>
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">恵みん</div>

                <div class="panel-body">
                    {{ evernote.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['evernote'],
        mounted() {
            console.log('Component evernote-tags mounted.')
        }
    }
</script>
