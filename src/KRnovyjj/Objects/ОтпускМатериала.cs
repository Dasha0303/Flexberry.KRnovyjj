﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KRnovyjj
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Отпуск материала.
    /// </summary>
    // *** Start programmer edit section *** (ОтпускМатериала CustomAttributes)

    // *** End programmer edit section *** (ОтпускМатериала CustomAttributes)
    [AutoAltered()]
    [Caption("Отпуск материала")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтпускМатериалаE", new string[] {
            "ДатаПроводки as \'Дата проводки\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Сотрудники.ФИО"})]
    [MasterViewDefineAttribute("ОтпускМатериалаE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ОтпускМатериалаL", new string[] {
            "ДатаПроводки as \'Дата проводки\'",
            "Сотрудники.ФИО as \'ФИО\'"})]
    public class ОтпускМатериала : ICSSoft.STORMNET.DataObject
    {
        
        private string fДатаПроводки;
        
        private IIS.KRnovyjj.Сотрудники fСотрудники;
        
        // *** Start programmer edit section *** (ОтпускМатериала CustomMembers)

        // *** End programmer edit section *** (ОтпускМатериала CustomMembers)

        
        /// <summary>
        /// ДатаПроводки.
        /// </summary>
        // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки CustomAttributes)

        // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки CustomAttributes)
        [StrLen(255)]
        public virtual string ДатаПроводки
        {
            get
            {
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Get start)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Get start)
                string result = this.fДатаПроводки;
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Get end)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Set start)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Set start)
                this.fДатаПроводки = value;
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Set end)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Set end)
            }
        }
        
        /// <summary>
        /// Отпуск материала.
        /// </summary>
        // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ОтпускМатериала.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.KRnovyjj.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Get start)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Get start)
                IIS.KRnovyjj.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Get end)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Set start)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Set end)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтпускМатериалаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтпускМатериалаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтпускМатериалаE", typeof(IIS.KRnovyjj.ОтпускМатериала));
                }
            }
            
            /// <summary>
            /// "ОтпускМатериалаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтпускМатериалаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтпускМатериалаL", typeof(IIS.KRnovyjj.ОтпускМатериала));
                }
            }
        }
    }
}
