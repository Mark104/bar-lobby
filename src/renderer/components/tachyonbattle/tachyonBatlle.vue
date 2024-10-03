<template>
    <div class="flex-row flex-grow gap-lg">
        <div class="flex-col flex-grow flex-4 gap-lg">
            <Card styleType="cover" class="flex-col flex-grow flex-3">
                <div class="flex-row">
                    <h6>
                        5v5 all welcome all happy hello and welcome to the new lobby interface thats fairly cool and I hope you're all cool
                        with it blah blah blah
                    </h6>
                </div>
                <div class="flex-col flex-grow gap-lg">
                    <div class="flex-row flex-grow gap-lg">
                        <div class="flex-col flex-grow flex-4">
                            <div class="container">
                                <div class="inner-container">
                                    <div class="flex-row gap-md">
                                        <Card class="flex-col flex-1 flex-grow min-width" title="Team 1">
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                            <div class="flex-row flex-grow">A long player name of justice</div>
                                        </Card>
                                        <Card class="flex-col flex-1 flex-grow min-width" title="Team 2"> Team 2 </Card>
                                        <Card class="flex-col flex-1 flex-grow min-width" title="Team 2"> Team 3 </Card>
                                        <Card class="flex-col flex-1 flex-grow min-width" title="Team 2"> Team 4 </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-row team-options">Team options go here</div>
            </Card>
            <Card class="flex-col flex-grow"> Chat goes here </Card>
        </div>
        <div class="flex-col flex-grow map-sidebar">
            <Card styleType="cover" class="flex-grow">
                <div class="flex-col flex-grow gap-lg">
                    <div class="flex-row">
                        <div>Map Details</div>
                    </div>
                    <div class="flex-row map">
                        <Card class="flex-row flex-grow">Mr Map goes here</Card>
                    </div>
                    <div class="flex-row">
                        <Card hover class="flex-grow">Change Map</Card>
                    </div>
                    <div class="flex-row">
                        <Card hover class="flex-grow">Adv Options</Card>
                    </div>
                    <div class="flex-row flex-grow">Details</div>
                    <div class="flex-row">
                        <Card class="flex-grow">Leave</Card>
                    </div>
                    <div class="flex-row">
                        <Card class="flex-grow">Start</Card>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onUnmounted } from "vue";
import Card from "@/components/common/Card.vue";
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    position: relative;
}

.inner-container {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: auto;
    pointer-events: auto;
}

.min-width {
    min-width: 280px;
}

.map-sidebar {
    min-width: 300px;
}

.map {
    min-width: 260px;
    height: 260px;
}

.team-options {
    min-height: 48px;
}
</style>
