﻿/*!@license
* Infragistics.Web.ClientUI Scheduler 17.1.20171.1019
*
* Copyright (c) 2016-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery.js
* jquery-ui.js
* infragistics.util.js
* infragistics.util.jquery.js
* infragistics.ui.scroll.js
* infragistics.ext_core.js
* infragistics.ext_collections.js
* infragistics.ext_collectionsExtended.js
* infragistics.ext_io.js
* infragistics.ext_text.js
* infragistics.ext_web.js
* infragistics.dv_core.js
* infragistics.dv_jquerydom.js
* infragistics.ext_ui.js
* infragistics.scheduler.core.js
*/
if(typeof jQuery==="undefined"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igSchedulerCore",{css:{unsupportedBrowserClass:"ui-html5-non-html5-supported-message ui-helper-clearfix ui-html5-non-html5",scheduler:"ui-igscheduler-core",tooltip:"ui-igscheduler-tooltip ui-corner-all",agendaView:"ui-igscheduler-agendaview",agendaViewDayHeader:"ui-igscheduler-agendaview-day-header",agendaViewMessage:"ui-igscheduler-agendaview-message",agendaApptStartTime:"ui-igscheduler-agenda-appt-start-time",agendaApptStartTimeSelected:"ui-igscheduler-agenda-appt-start-time-selected",agendaApptEndTime:"ui-igscheduler-agenda-appt-end-time",agendaApptEndTimeSelected:"ui-igscheduler-agenda-appt-end-time-selected",agendaApptSubject:"ui-igscheduler-agenda-appt-subject",agendaApptSubjectSelected:"ui-igscheduler-agenda-appt-subject-selected",agendaApptLocation:"ui-igscheduler-agenda-appt-location",agendaApptLocationSelected:"ui-igscheduler-agenda-appt-location-selected",agendaApptArea:"ui-igscheduler-agenda-appt-area",agendaApptSelected:"ui-igscheduler-agenda-appt-selected",agendaApptColorBar:"ui-igscheduler-agenda-appt-color-bar",agendaApptHorizontalSeparator:"ui-igscheduler-agenda-appt-horizontal-separator",dayView:"ui-igscheduler-dayview",horizontalViewSplitter:"ui-igscheduler-horizontal-view-splitter",monthView:"ui-igscheduler-monthview",monthViewActivityIndicator:"ui-igscheduler-monthview-activity-indicator",monthViewDay:"ui-igscheduler-monthview-day",monthViewDayAppointment:"ui-igscheduler-monthview-day-appointment",monthViewDayLeading:"ui-igscheduler-monthview-day-leading",monthViewDayHorizontalSeparator:"ui-igscheduler-monthview-day-horizontal-separator",monthViewDayOfWeekHeader:"ui-igscheduler-monthview-day-of-week-header",monthViewDaySelected:"ui-igscheduler-monthview-day-selected",monthViewDayToday:"ui-igscheduler-monthview-day-today",monthViewDayTodayIndicator:"ui-igscheduler-monthview-day-today-indicator",monthViewDayTrailing:"ui-igscheduler-monthview-day-trailing",monthViewDayVerticalSeparator:"ui-igscheduler-monthview-day-vertical-separator",monthViewMonthHeader:"ui-igscheduler-monthview-month-header",monthViewMonthHeaderHorizontalSeparator:"ui-igscheduler-monthview-month-header-horizontal-separator",monthViewWeekHeader:"ui-igscheduler-monthview-week-header",verticalViewSplitter:"ui-igscheduler-vertical-view-splitter",weekView:"ui-igscheduler-weekview"},events:{appointmentDoubleClicked:null,dayDoubleClicked:null,layoutUpdated:null,appointmentClicked:null,appointmentSelected:null,dayClicked:null,dayOfWeekHeaderClicked:null,monthHeaderClicked:null,selectedDateChanged:null,weekNumberClicked:null},options:{width:null,height:null,height:0,width:0,cultureName:null,agendaViewAppointmentEndTimeBackgroundBrush:null,agendaViewAppointmentEndTimeFontInfo:null,agendaViewAppointmentEndTimeSelectedBackgroundBrush:null,agendaViewAppointmentEndTimeSelectedTextBrush:null,agendaViewAppointmentEndTimeTextBrush:null,agendaViewAppointmentLocationBackgroundBrush:null,agendaViewAppointmentLocationFontInfo:null,agendaViewAppointmentLocationSelectedBackgroundBrush:null,agendaViewAppointmentLocationSelectedTextBrush:null,agendaViewAppointmentLocationTextBrush:null,agendaViewAppointmentMargin:null,agendaViewAppointmentScope:"onlyAppointmentsForSelectedDate",agendaViewAppointmentSeparatorLineBrush:null,agendaViewAppointmentStartTimeBackgroundBrush:null,agendaViewAppointmentStartTimeFontInfo:null,agendaViewAppointmentStartTimeSelectedBackgroundBrush:null,agendaViewAppointmentStartTimeSelectedTextBrush:null,agendaViewAppointmentStartTimeTextBrush:null,agendaViewAppointmentSubjectBackgroundBrush:null,agendaViewAppointmentSubjectFontInfo:null,agendaViewAppointmentSubjectSelectedBackgroundBrush:null,agendaViewAppointmentSubjectSelectedTextBrush:null,agendaViewAppointmentSubjectTextBrush:null,agendaViewBackgroundBrush:null,agendaViewDayHeaderBackgroundBrush:null,agendaViewDayHeaderFontInfo:null,agendaViewDayHeaderMargin:null,agendaViewDayHeaderSeparatorLineBrush:null,agendaViewDayHeaderTextBrush:null,agendaViewInterDaySpacing:10,agendaViewMaximumDate:null,agendaViewMessageFontInfo:null,agendaViewMessageTextBrush:null,agendaViewMinimumDate:null,dataSource:null,maximumDate:null,minimumDate:null,monthViewDayActivityIndicatorBrush:null,monthViewAgendaVisibility:"visible",monthViewAppointmentFontInfo:null,monthViewBackgroundBrush:null,monthViewDayContentDisplayMode:"squareIndicator",monthViewDayBackgroundBrush:null,monthViewDayFontInfo:null,monthViewDayTextBrush:null,monthViewDayOfWeekHeaderBackgroundBrush:null,monthViewDayOfWeekHeaderFontInfo:null,monthViewDayOfWeekHeaderMargin:null,monthViewDayOfWeekHeaderTextBrush:null,monthViewDayOfWeekHeaderVisibility:"visible",monthViewHorizontalSeparatorVisibility:"collapsed",monthViewInterMonthSpacing:10,monthViewLeadingDayBackgroundBrush:null,monthViewLeadingDayFontInfo:null,monthViewLeadingDayTextBrush:null,monthViewLeadingDayVisibility:"visible",monthViewNameBackgroundBrush:null,monthViewNameSeparatorLineBrush:null,monthViewNameTextBrush:null,monthViewNameFontInfo:null,monthViewNameMargin:null,monthViewNameVisibility:"visible",monthViewScrollDirection:"horizontal",monthViewSelectedDayBackgroundBrush:null,monthViewSelectedDayTextBrush:null,monthViewSeparatorLineBrush:null,monthViewTodayHighlightBrush:null,monthViewTodayTextBrush:null,monthViewTrailingDayBackgroundBrush:null,monthViewTrailingDayFontInfo:null,monthViewTrailingDayTextBrush:null,monthViewTrailingDayVisibility:"visible",monthViewVerticalSeparatorVisibility:"collapsed",monthViewWeekNumberBackgroundBrush:null,monthViewWeekNumberFontInfo:null,monthViewWeekNumberTextBrush:null,monthViewWeekNumberVisibility:"collapsed",selectedAppointment:null,selectedDate:null,viewSplitOrientation:"horizontal",viewMode:null},_setOption:function(key,value,checkPrev){var schedulerCore=this._schedulerCore,o=this.options;if(checkPrev&&o[key]===value){return}$.Widget.prototype._setOption.apply(this,arguments);if(this._set_option(schedulerCore,key,value)){return this}return this},_set_generated_option:function(schedulerCore,key,value){switch(key){case"height":schedulerCore.height(value);return true;case"width":schedulerCore.width(value);return true;case"cultureName":schedulerCore.cultureName(value);return true;case"agendaViewAppointmentEndTimeBackgroundBrush":if(value==null){schedulerCore.agendaViewAppointmentEndTimeBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentEndTimeBackgroundBrush($tempBrush)}return true;case"agendaViewAppointmentEndTimeFontInfo":schedulerCore.agendaViewAppointmentEndTimeFontInfo(value);return true;case"agendaViewAppointmentEndTimeSelectedBackgroundBrush":if(value==null){schedulerCore.agendaViewAppointmentEndTimeSelectedBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentEndTimeSelectedBackgroundBrush($tempBrush)}return true;case"agendaViewAppointmentEndTimeSelectedTextBrush":if(value==null){schedulerCore.agendaViewAppointmentEndTimeSelectedTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentEndTimeSelectedTextBrush($tempBrush)}return true;case"agendaViewAppointmentEndTimeTextBrush":if(value==null){schedulerCore.agendaViewAppointmentEndTimeTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentEndTimeTextBrush($tempBrush)}return true;case"agendaViewAppointmentLocationBackgroundBrush":if(value==null){schedulerCore.agendaViewAppointmentLocationBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentLocationBackgroundBrush($tempBrush)}return true;case"agendaViewAppointmentLocationFontInfo":schedulerCore.agendaViewAppointmentLocationFontInfo(value);return true;case"agendaViewAppointmentLocationSelectedBackgroundBrush":if(value==null){schedulerCore.agendaViewAppointmentLocationSelectedBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentLocationSelectedBackgroundBrush($tempBrush)}return true;case"agendaViewAppointmentLocationSelectedTextBrush":if(value==null){schedulerCore.agendaViewAppointmentLocationSelectedTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentLocationSelectedTextBrush($tempBrush)}return true;case"agendaViewAppointmentLocationTextBrush":if(value==null){schedulerCore.agendaViewAppointmentLocationTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentLocationTextBrush($tempBrush)}return true;case"agendaViewAppointmentMargin":schedulerCore.agendaViewAppointmentMargin(value);return true;case"agendaViewAppointmentScope":switch(value){case"allAppointments":schedulerCore.agendaViewAppointmentScope(0);break;case"onlyAppointmentsForSelectedDate":schedulerCore.agendaViewAppointmentScope(1);break}return true;case"agendaViewAppointmentSeparatorLineBrush":if(value==null){schedulerCore.agendaViewAppointmentSeparatorLineBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentSeparatorLineBrush($tempBrush)}return true;case"agendaViewAppointmentStartTimeBackgroundBrush":if(value==null){schedulerCore.agendaViewAppointmentStartTimeBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentStartTimeBackgroundBrush($tempBrush)}return true;case"agendaViewAppointmentStartTimeFontInfo":schedulerCore.agendaViewAppointmentStartTimeFontInfo(value);return true;case"agendaViewAppointmentStartTimeSelectedBackgroundBrush":if(value==null){schedulerCore.agendaViewAppointmentStartTimeSelectedBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentStartTimeSelectedBackgroundBrush($tempBrush)}return true;case"agendaViewAppointmentStartTimeSelectedTextBrush":if(value==null){schedulerCore.agendaViewAppointmentStartTimeSelectedTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentStartTimeSelectedTextBrush($tempBrush)}return true;case"agendaViewAppointmentStartTimeTextBrush":if(value==null){schedulerCore.agendaViewAppointmentStartTimeTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentStartTimeTextBrush($tempBrush)}return true;case"agendaViewAppointmentSubjectBackgroundBrush":if(value==null){schedulerCore.agendaViewAppointmentSubjectBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentSubjectBackgroundBrush($tempBrush)}return true;case"agendaViewAppointmentSubjectFontInfo":schedulerCore.agendaViewAppointmentSubjectFontInfo(value);return true;case"agendaViewAppointmentSubjectSelectedBackgroundBrush":if(value==null){schedulerCore.agendaViewAppointmentSubjectSelectedBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentSubjectSelectedBackgroundBrush($tempBrush)}return true;case"agendaViewAppointmentSubjectSelectedTextBrush":if(value==null){schedulerCore.agendaViewAppointmentSubjectSelectedTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentSubjectSelectedTextBrush($tempBrush)}return true;case"agendaViewAppointmentSubjectTextBrush":if(value==null){schedulerCore.agendaViewAppointmentSubjectTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewAppointmentSubjectTextBrush($tempBrush)}return true;case"agendaViewBackgroundBrush":if(value==null){schedulerCore.agendaViewBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewBackgroundBrush($tempBrush)}return true;case"agendaViewDayHeaderBackgroundBrush":if(value==null){schedulerCore.agendaViewDayHeaderBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewDayHeaderBackgroundBrush($tempBrush)}return true;case"agendaViewDayHeaderFontInfo":schedulerCore.agendaViewDayHeaderFontInfo(value);return true;case"agendaViewDayHeaderMargin":schedulerCore.agendaViewDayHeaderMargin(value);return true;case"agendaViewDayHeaderSeparatorLineBrush":if(value==null){schedulerCore.agendaViewDayHeaderSeparatorLineBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewDayHeaderSeparatorLineBrush($tempBrush)}return true;case"agendaViewDayHeaderTextBrush":if(value==null){schedulerCore.agendaViewDayHeaderTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewDayHeaderTextBrush($tempBrush)}return true;case"agendaViewInterDaySpacing":schedulerCore.agendaViewInterDaySpacing(value);return true;case"agendaViewMaximumDate":schedulerCore.agendaViewMaximumDate(value);return true;case"agendaViewMessageFontInfo":schedulerCore.agendaViewMessageFontInfo(value);return true;case"agendaViewMessageTextBrush":if(value==null){schedulerCore.agendaViewMessageTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.agendaViewMessageTextBrush($tempBrush)}return true;case"agendaViewMinimumDate":schedulerCore.agendaViewMinimumDate(value);return true;case"dataSource":schedulerCore.dataSource(value);return true;case"maximumDate":schedulerCore.maximumDate(value);return true;case"minimumDate":schedulerCore.minimumDate(value);return true;case"monthViewDayActivityIndicatorBrush":if(value==null){schedulerCore.monthViewDayActivityIndicatorBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewDayActivityIndicatorBrush($tempBrush)}return true;case"monthViewAgendaVisibility":switch(value){case"visible":schedulerCore.monthViewAgendaVisibility(0);break;case"collapsed":schedulerCore.monthViewAgendaVisibility(1);break}return true;case"monthViewAppointmentFontInfo":schedulerCore.monthViewAppointmentFontInfo(value);return true;case"monthViewBackgroundBrush":if(value==null){schedulerCore.monthViewBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewBackgroundBrush($tempBrush)}return true;case"monthViewDayContentDisplayMode":switch(value){case"squareIndicator":schedulerCore.monthViewDayContentDisplayMode(0);break;case"activitySubject":schedulerCore.monthViewDayContentDisplayMode(1);break}return true;case"monthViewDayBackgroundBrush":if(value==null){schedulerCore.monthViewDayBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewDayBackgroundBrush($tempBrush)}return true;case"monthViewDayFontInfo":schedulerCore.monthViewDayFontInfo(value);return true;case"monthViewDayTextBrush":if(value==null){schedulerCore.monthViewDayTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewDayTextBrush($tempBrush)}return true;case"monthViewDayOfWeekHeaderBackgroundBrush":if(value==null){schedulerCore.monthViewDayOfWeekHeaderBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewDayOfWeekHeaderBackgroundBrush($tempBrush)}return true;case"monthViewDayOfWeekHeaderFontInfo":schedulerCore.monthViewDayOfWeekHeaderFontInfo(value);return true;case"monthViewDayOfWeekHeaderMargin":schedulerCore.monthViewDayOfWeekHeaderMargin(value);return true;case"monthViewDayOfWeekHeaderTextBrush":if(value==null){schedulerCore.monthViewDayOfWeekHeaderTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewDayOfWeekHeaderTextBrush($tempBrush)}return true;case"monthViewDayOfWeekHeaderVisibility":switch(value){case"visible":schedulerCore.monthViewDayOfWeekHeaderVisibility(0);break;case"collapsed":schedulerCore.monthViewDayOfWeekHeaderVisibility(1);break}return true;case"monthViewHorizontalSeparatorVisibility":switch(value){case"visible":schedulerCore.monthViewHorizontalSeparatorVisibility(0);break;case"collapsed":schedulerCore.monthViewHorizontalSeparatorVisibility(1);break}return true;case"monthViewInterMonthSpacing":schedulerCore.monthViewInterMonthSpacing(value);return true;case"monthViewLeadingDayBackgroundBrush":if(value==null){schedulerCore.monthViewLeadingDayBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewLeadingDayBackgroundBrush($tempBrush)}return true;case"monthViewLeadingDayFontInfo":schedulerCore.monthViewLeadingDayFontInfo(value);return true;case"monthViewLeadingDayTextBrush":if(value==null){schedulerCore.monthViewLeadingDayTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewLeadingDayTextBrush($tempBrush)}return true;case"monthViewLeadingDayVisibility":switch(value){case"visible":schedulerCore.monthViewLeadingDayVisibility(0);break;case"collapsed":schedulerCore.monthViewLeadingDayVisibility(1);break}return true;case"monthViewNameBackgroundBrush":if(value==null){schedulerCore.monthViewNameBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewNameBackgroundBrush($tempBrush)}return true;case"monthViewNameSeparatorLineBrush":if(value==null){schedulerCore.monthViewNameSeparatorLineBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewNameSeparatorLineBrush($tempBrush)}return true;case"monthViewNameTextBrush":if(value==null){schedulerCore.monthViewNameTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewNameTextBrush($tempBrush)}return true;case"monthViewNameFontInfo":schedulerCore.monthViewNameFontInfo(value);return true;case"monthViewNameMargin":schedulerCore.monthViewNameMargin(value);return true;case"monthViewNameVisibility":switch(value){case"visible":schedulerCore.monthViewNameVisibility(0);break;case"collapsed":schedulerCore.monthViewNameVisibility(1);break}return true;case"monthViewScrollDirection":switch(value){case"vertical":schedulerCore.monthViewScrollDirection(0);break;case"horizontal":schedulerCore.monthViewScrollDirection(1);break}return true;case"monthViewSelectedDayBackgroundBrush":if(value==null){schedulerCore.monthViewSelectedDayBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewSelectedDayBackgroundBrush($tempBrush)}return true;case"monthViewSelectedDayTextBrush":if(value==null){schedulerCore.monthViewSelectedDayTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewSelectedDayTextBrush($tempBrush)}return true;case"monthViewSeparatorLineBrush":if(value==null){schedulerCore.monthViewSeparatorLineBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewSeparatorLineBrush($tempBrush)}return true;case"monthViewTodayHighlightBrush":if(value==null){schedulerCore.monthViewTodayHighlightBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewTodayHighlightBrush($tempBrush)}return true;case"monthViewTodayTextBrush":if(value==null){schedulerCore.monthViewTodayTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewTodayTextBrush($tempBrush)}return true;case"monthViewTrailingDayBackgroundBrush":if(value==null){schedulerCore.monthViewTrailingDayBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewTrailingDayBackgroundBrush($tempBrush)}return true;case"monthViewTrailingDayFontInfo":schedulerCore.monthViewTrailingDayFontInfo(value);return true;case"monthViewTrailingDayTextBrush":if(value==null){schedulerCore.monthViewTrailingDayTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewTrailingDayTextBrush($tempBrush)}return true;case"monthViewTrailingDayVisibility":switch(value){case"visible":schedulerCore.monthViewTrailingDayVisibility(0);break;case"collapsed":schedulerCore.monthViewTrailingDayVisibility(1);break}return true;case"monthViewVerticalSeparatorVisibility":switch(value){case"visible":schedulerCore.monthViewVerticalSeparatorVisibility(0);break;case"collapsed":schedulerCore.monthViewVerticalSeparatorVisibility(1);break}return true;case"monthViewWeekNumberBackgroundBrush":if(value==null){schedulerCore.monthViewWeekNumberBackgroundBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewWeekNumberBackgroundBrush($tempBrush)}return true;case"monthViewWeekNumberFontInfo":schedulerCore.monthViewWeekNumberFontInfo(value);return true;case"monthViewWeekNumberTextBrush":if(value==null){schedulerCore.monthViewWeekNumberTextBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);schedulerCore.monthViewWeekNumberTextBrush($tempBrush)}return true;case"monthViewWeekNumberVisibility":switch(value){case"visible":schedulerCore.monthViewWeekNumberVisibility(0);break;case"collapsed":schedulerCore.monthViewWeekNumberVisibility(1);break}return true;case"selectedAppointment":schedulerCore.selectedAppointment(value);return true;case"selectedDate":schedulerCore.selectedDate(value);return true;case"viewSplitOrientation":switch(value){case"vertical":schedulerCore.viewSplitOrientation(0);break;case"horizontal":schedulerCore.viewSplitOrientation(1);break}return true;case"viewMode":switch(value){case"monthView":schedulerCore.viewMode(0);break;case"agendaView":schedulerCore.viewMode(1);break}return true}},_set_option:function(schedulerCore,key,value){var self=this;var currentKey;switch(key){case"width":this._setSize(schedulerCore,"width",value);return true;case"height":this._setSize(schedulerCore,"height",value);return true;default:if(this._set_generated_option(schedulerCore,key,value))return true;return false}},_creationOptions:null,_schedulerCore:null,_menuPropertyChangeHandlers:null,_createWidget:function(options,element,widget){this._creationOptions=options;$.Widget.prototype._createWidget.apply(this,[options,element])},_create:function(){var key,v,size,schedulerCore,width,height,i=-1,self=this,elem=self.element,style=elem[0].style,o=this._creationOptions;self._old_state={style:{position:style.position,width:style.width,height:style.height,visibility:style.visibility},css:elem[0].className,elems:elem.find("*")};if(!$.ig.util._isCanvasSupported()){$.ig.util._renderUnsupportedBrowser(this);return}schedulerCore=this._createScheduler();this.options.selectedDate=schedulerCore.selectedDate();if(+this.options.selectedDate!=+null)this.options.selectedDate=$.ig.Date.prototype.fromTicks(this.options.selectedDate.getTime());self._schedulerCore=schedulerCore;self._schedulerPropertyChangeHandlers={};self._schedulerPropertyChangeHandlers["SelectedDate"]=function(schedulerCore){var selDate=schedulerCore.selectedDate();if(+selDate==+null){this.options.selectedDate=selDate}else{this.options.selectedDate=$.ig.Date.prototype.fromTicks(selDate.getTime())}};self._schedulerPropertyChangeHandlers["SelectedAppointment"]=function(schedulerCore){this.options.selectedAppointment=schedulerCore.selectedAppointment()};schedulerCore.propertyChanged=$.ig.Delegate.prototype.combine(schedulerCore.propertyChanged,jQuery.proxy(this._onSchedulerPropChanged,this));schedulerCore.appointmentDoubleClicked=$.ig.Delegate.prototype.combine(schedulerCore.appointmentDoubleClicked,$.proxy(this._fireSchedulerCore_appointmentDoubleClicked,this));schedulerCore.dayDoubleClicked=$.ig.Delegate.prototype.combine(schedulerCore.dayDoubleClicked,$.proxy(this._fireSchedulerCore_dayDoubleClicked,this));schedulerCore.layoutUpdated=$.ig.Delegate.prototype.combine(schedulerCore.layoutUpdated,$.proxy(this._fireSchedulerCore_layoutUpdated,this));schedulerCore.appointmentClicked=$.ig.Delegate.prototype.combine(schedulerCore.appointmentClicked,$.proxy(this._fireSchedulerCore_appointmentClicked,this));schedulerCore.appointmentSelected=$.ig.Delegate.prototype.combine(schedulerCore.appointmentSelected,$.proxy(this._fireSchedulerCore_appointmentSelected,this));schedulerCore.dayClicked=$.ig.Delegate.prototype.combine(schedulerCore.dayClicked,$.proxy(this._fireSchedulerCore_dayClicked,this));schedulerCore.dayOfWeekHeaderClicked=$.ig.Delegate.prototype.combine(schedulerCore.dayOfWeekHeaderClicked,$.proxy(this._fireSchedulerCore_dayOfWeekHeaderClicked,this));schedulerCore.monthHeaderClicked=$.ig.Delegate.prototype.combine(schedulerCore.monthHeaderClicked,$.proxy(this._fireSchedulerCore_monthHeaderClicked,this));schedulerCore.selectedDateChanged=$.ig.Delegate.prototype.combine(schedulerCore.selectedDateChanged,$.proxy(this._fireSchedulerCore_selectedDateChanged,this));schedulerCore.weekNumberClicked=$.ig.Delegate.prototype.combine(schedulerCore.weekNumberClicked,$.proxy(this._fireSchedulerCore_weekNumberClicked,this));if(o.hasOwnProperty("width"))elem[0].style.width=o["width"];if(o.hasOwnProperty("height"))elem[0].style.height=o["height"];schedulerCore.initializeCss(this.css);schedulerCore.provideContainer(elem[0]);for(key in o){if(o.hasOwnProperty(key)){v=o[key];if(v!==null){this._setOption(key,v,false)}}}while(i++<1){key=i===0?"width":"height";if(o[key]){size=key;v=o[key]}else{v=elem[0].style[key]}if(v&&v.indexOf("%")>0){self._setSize(schedulerCore,size=key,v)}}if(!size){self._setSize(schedulerCore,"width")}if(self.css&&self.css.schedulerCore){elem.addClass(self.css.schedulerCore)}schedulerCore.onInitialized()},_createScheduler:function(){return new $.ig.Scheduler},_onSchedulerPropChanged:function(schedulerCore,evt){var handler=this._schedulerPropertyChangeHandlers[evt._propertyName];if(handler)handler.call(this,schedulerCore)},_fireSchedulerCore_appointmentSelected:function(schedulerCore,evt){var opts={};opts.owner=this;opts.selectedAppointment=evt.selectedAppointment();opts.selectedInDate=evt.selectedInDate();opts.viewMode=evt.viewMode();this._trigger("appointmentSelected",null,opts)},_fireSchedulerCore_appointmentClicked:function(schedulerCore,evt){var opts={};opts.owner=this;opts.appointment=evt.clickedAppointment();opts.clickedInDate=evt.clickedInDate();opts.viewMode=evt.viewMode();opts.allowSelection=evt.allowSelection();this._trigger("appointmentClicked",null,opts);evt.allowSelection(opts.allowSelection)},_fireSchedulerCore_appointmentDoubleClicked:function(schedulerCore,evt){var opts={};opts.owner=this;opts.appointment=evt.appointment();opts.clickedInDate=evt.clickedInDate();opts.viewMode=evt.viewMode();this._trigger("appointmentDoubleClicked",null,opts)},_fireSchedulerCore_dayClicked:function(schedulerCore,evt){var opts={};opts.owner=this;opts.clickedDate=evt.clickedDate();opts.viewMode=evt.viewMode();this._trigger("dayClicked",null,opts)},_fireSchedulerCore_dayDoubleClicked:function(schedulerCore,evt){var opts={};opts.owner=this;opts.clickedDate=evt.clickedDate();opts.viewMode=evt.viewMode();this._trigger("dayDoubleClicked",null,opts)},_fireSchedulerCore_dayOfWeekHeaderClicked:function(schedulerCore,evt){var opts={};opts.owner=this;opts.year=evt.year();opts.month=evt.month();opts.dayOfWeek=evt.dayOfWeek();this._trigger("dayOfWeekHeaderClicked",null,opts)},_fireSchedulerCore_layoutUpdated:function(schedulerCore,evt){var opts={};opts.owner=this;opts.viewMode=evt.viewMode();this._trigger("layoutUpdated",null,opts)},_fireSchedulerCore_monthHeaderClicked:function(schedulerCore,evt){var opts={};opts.owner=this;opts.year=evt.year();opts.month=evt.month();this._trigger("monthHeaderClicked",null,opts)},_fireSchedulerCore_selectedDateChanged:function(schedulerCore,evt){var opts={};opts.owner=this;opts.selectedDate=evt.selectedDate();this._trigger("selectedDateChanged",null,opts)},_fireSchedulerCore_weekNumberClicked:function(schedulerCore,evt){var opts={};opts.owner=this;opts.year=evt.year();opts.month=evt.month();opts.weekNumber=evt.weekNumber();this._trigger("weekNumberClicked",null,opts)},_setSize:function(schedulerCore,key,val){$.ig.util.setSize(this.element,key,val,schedulerCore,this._getNotifyResizeName())},_getNotifyResizeName:function(){return"containerResized"},ensureDayVisibleInMonthView:function(date,animate){if(this._schedulerCore){return this._schedulerCore.ensureDayVisibleInMonthView(date,animate)}return false},ensureDayVisibleInAgendaView:function(date,animate,scrollDayToTop){if(this._schedulerCore){return this._schedulerCore.ensureDayVisibleInAgendaView(date,animate,scrollDayToTop)}return false},ensureMonthVisibleInMonthView:function(date,animate){if(this._schedulerCore){return this._schedulerCore.ensureMonthVisibleInMonthView(date,animate)}return false},flush:function(){if(this._schedulerCore&&this._schedulerCore.flush)this._schedulerCore.flush()},getElementAtPoint:function(x,y){if(this._schedulerCore){var point=$.ig.APIFactory.prototype.createPoint(x,y);return this._schedulerCore.getElementAtPoint(point)}return null},getElementForActivity:function(activity,viewMode,date){if(this._schedulerCore){return this._schedulerCore.getElementForActivity(activity,viewMode,date)}return null},getElementForDay:function(date){if(this._schedulerCore){return this._schedulerCore.getElementForDay(date)}return null},hitTest:function(x,y){if(this._schedulerCore){var point=$.ig.APIFactory.prototype.createPoint(x,y);return this._schedulerCore.hitTest(point)}return null},destroy:function(){var key,style,schedulerCore=this._schedulerCore,old=this._old_state,elem=this.element;if(!old){return}elem.find("*").not(old.elems).remove();if(this.css.schedulerCore){elem.removeClass(this.css.schedulerCore)}old=old.style;style=elem[0].style;for(key in old){if(old.hasOwnProperty(key)){if(style[key]!==old[key]){style[key]=old[key]}}}if(schedulerCore){this._setSize(schedulerCore)}$.Widget.prototype.destroy.apply(this,arguments);if(schedulerCore&&schedulerCore.destroy){schedulerCore.destroy()}delete this._schedulerCore;delete this._old_state},styleUpdated:function(){if(this._schedulerCore){this._schedulerCore.styleUpdated()}}});$.extend($.ui.igSchedulerCore,{version:"17.1.20171.1019"})})(jQuery);