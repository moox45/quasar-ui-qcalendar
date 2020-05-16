(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[91],{f695:function(e,n,l){"use strict";l.r(n),n["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <q-calendar\n      v-model="selectedDate"\n      view="week-scheduler"\n      :resources="resources"\n      locale="en-us"\n      style="height: 500px;"\n    >\n      <template #scheduler-resource-day="{ day, index, resource }">\n        <q-btn class="fit"><span class="ellipsis" style="font-size: 10px;">{{ resource.label }}:{{ day.day }}</span></q-btn>\n      </template>\n    </q-calendar>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      resources: [\n        { label: \'John\' },\n        { label: \'Mary\' },\n        { label: \'Susan\' },\n        { label: \'Olivia\' },\n        { label: \'Board Room\' },\n        { label: \'Room-1\' },\n        { label: \'Room-2\' }\n      ]\n    }\n  }\n}\n<\/script>\n'}}]);