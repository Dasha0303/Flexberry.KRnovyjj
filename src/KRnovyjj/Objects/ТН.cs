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
    /// ТН.
    /// </summary>
    // *** Start programmer edit section *** (ТН CustomAttributes)

    // *** End programmer edit section *** (ТН CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТНE", new string[] {
            "НомерТН as \'Номер ТН\'",
            "Поставщик as \'Поставщик\'",
            "НомерТС as \'Номер ТС\'",
            "Материал as \'Материал\'",
            "Колво as \'Колво\'",
            "АктПриемки as \'Акт приемки\'",
            "АктПриемки.ДатаПриемки as \'Дата приемки\'",
            "ТЧАктаПриемки as \'Т ч акта приемки\'",
            "ТЧАктаПриемки.НомерПозиции as \'Номер позиции\'"}, Hidden=new string[] {
            "АктПриемки.ДатаПриемки",
            "ТЧАктаПриемки.НомерПозиции"})]
    [MasterViewDefineAttribute("ТНE", "АктПриемки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ДатаПриемки")]
    [MasterViewDefineAttribute("ТНE", "ТЧАктаПриемки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомерПозиции")]
    [View("ТНL", new string[] {
            "НомерТН as \'Номер ТН\'",
            "Поставщик as \'Поставщик\'",
            "НомерТС as \'Номер ТС\'",
            "Материал as \'Материал\'",
            "Колво as \'Колво\'",
            "АктПриемки.ДатаПриемки as \'Дата приемки\'",
            "ТЧАктаПриемки.НомерПозиции as \'Номер позиции\'"})]
    public class ТН : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерТН;
        
        private string fПоставщик;
        
        private string fНомерТС;
        
        private string fМатериал;
        
        private string fКолво;
        
        private IIS.KRnovyjj.АктПриемки fАктПриемки;
        
        private IIS.KRnovyjj.ТЧАктаПриемки fТЧАктаПриемки;
        
        // *** Start programmer edit section *** (ТН CustomMembers)

        // *** End programmer edit section *** (ТН CustomMembers)

        
        /// <summary>
        /// Колво.
        /// </summary>
        // *** Start programmer edit section *** (ТН.Колво CustomAttributes)

        // *** End programmer edit section *** (ТН.Колво CustomAttributes)
        [StrLen(255)]
        public virtual string Колво
        {
            get
            {
                // *** Start programmer edit section *** (ТН.Колво Get start)

                // *** End programmer edit section *** (ТН.Колво Get start)
                string result = this.fКолво;
                // *** Start programmer edit section *** (ТН.Колво Get end)

                // *** End programmer edit section *** (ТН.Колво Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.Колво Set start)

                // *** End programmer edit section *** (ТН.Колво Set start)
                this.fКолво = value;
                // *** Start programmer edit section *** (ТН.Колво Set end)

                // *** End programmer edit section *** (ТН.Колво Set end)
            }
        }
        
        /// <summary>
        /// Материал.
        /// </summary>
        // *** Start programmer edit section *** (ТН.Материал CustomAttributes)

        // *** End programmer edit section *** (ТН.Материал CustomAttributes)
        [StrLen(255)]
        public virtual string Материал
        {
            get
            {
                // *** Start programmer edit section *** (ТН.Материал Get start)

                // *** End programmer edit section *** (ТН.Материал Get start)
                string result = this.fМатериал;
                // *** Start programmer edit section *** (ТН.Материал Get end)

                // *** End programmer edit section *** (ТН.Материал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.Материал Set start)

                // *** End programmer edit section *** (ТН.Материал Set start)
                this.fМатериал = value;
                // *** Start programmer edit section *** (ТН.Материал Set end)

                // *** End programmer edit section *** (ТН.Материал Set end)
            }
        }
        
        /// <summary>
        /// НомерТН.
        /// </summary>
        // *** Start programmer edit section *** (ТН.НомерТН CustomAttributes)

        // *** End programmer edit section *** (ТН.НомерТН CustomAttributes)
        public virtual int НомерТН
        {
            get
            {
                // *** Start programmer edit section *** (ТН.НомерТН Get start)

                // *** End programmer edit section *** (ТН.НомерТН Get start)
                int result = this.fНомерТН;
                // *** Start programmer edit section *** (ТН.НомерТН Get end)

                // *** End programmer edit section *** (ТН.НомерТН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.НомерТН Set start)

                // *** End programmer edit section *** (ТН.НомерТН Set start)
                this.fНомерТН = value;
                // *** Start programmer edit section *** (ТН.НомерТН Set end)

                // *** End programmer edit section *** (ТН.НомерТН Set end)
            }
        }
        
        /// <summary>
        /// НомерТС.
        /// </summary>
        // *** Start programmer edit section *** (ТН.НомерТС CustomAttributes)

        // *** End programmer edit section *** (ТН.НомерТС CustomAttributes)
        [StrLen(255)]
        public virtual string НомерТС
        {
            get
            {
                // *** Start programmer edit section *** (ТН.НомерТС Get start)

                // *** End programmer edit section *** (ТН.НомерТС Get start)
                string result = this.fНомерТС;
                // *** Start programmer edit section *** (ТН.НомерТС Get end)

                // *** End programmer edit section *** (ТН.НомерТС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.НомерТС Set start)

                // *** End programmer edit section *** (ТН.НомерТС Set start)
                this.fНомерТС = value;
                // *** Start programmer edit section *** (ТН.НомерТС Set end)

                // *** End programmer edit section *** (ТН.НомерТС Set end)
            }
        }
        
        /// <summary>
        /// Поставщик.
        /// </summary>
        // *** Start programmer edit section *** (ТН.Поставщик CustomAttributes)

        // *** End programmer edit section *** (ТН.Поставщик CustomAttributes)
        [StrLen(255)]
        public virtual string Поставщик
        {
            get
            {
                // *** Start programmer edit section *** (ТН.Поставщик Get start)

                // *** End programmer edit section *** (ТН.Поставщик Get start)
                string result = this.fПоставщик;
                // *** Start programmer edit section *** (ТН.Поставщик Get end)

                // *** End programmer edit section *** (ТН.Поставщик Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.Поставщик Set start)

                // *** End programmer edit section *** (ТН.Поставщик Set start)
                this.fПоставщик = value;
                // *** Start programmer edit section *** (ТН.Поставщик Set end)

                // *** End programmer edit section *** (ТН.Поставщик Set end)
            }
        }
        
        /// <summary>
        /// ТН.
        /// </summary>
        // *** Start programmer edit section *** (ТН.АктПриемки CustomAttributes)

        // *** End programmer edit section *** (ТН.АктПриемки CustomAttributes)
        [PropertyStorage(new string[] {
                "АктПриемки"})]
        [NotNull()]
        public virtual IIS.KRnovyjj.АктПриемки АктПриемки
        {
            get
            {
                // *** Start programmer edit section *** (ТН.АктПриемки Get start)

                // *** End programmer edit section *** (ТН.АктПриемки Get start)
                IIS.KRnovyjj.АктПриемки result = this.fАктПриемки;
                // *** Start programmer edit section *** (ТН.АктПриемки Get end)

                // *** End programmer edit section *** (ТН.АктПриемки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.АктПриемки Set start)

                // *** End programmer edit section *** (ТН.АктПриемки Set start)
                this.fАктПриемки = value;
                // *** Start programmer edit section *** (ТН.АктПриемки Set end)

                // *** End programmer edit section *** (ТН.АктПриемки Set end)
            }
        }
        
        /// <summary>
        /// ТН.
        /// </summary>
        // *** Start programmer edit section *** (ТН.ТЧАктаПриемки CustomAttributes)

        // *** End programmer edit section *** (ТН.ТЧАктаПриемки CustomAttributes)
        [PropertyStorage(new string[] {
                "ТЧАктаПриемки"})]
        [NotNull()]
        public virtual IIS.KRnovyjj.ТЧАктаПриемки ТЧАктаПриемки
        {
            get
            {
                // *** Start programmer edit section *** (ТН.ТЧАктаПриемки Get start)

                // *** End programmer edit section *** (ТН.ТЧАктаПриемки Get start)
                IIS.KRnovyjj.ТЧАктаПриемки result = this.fТЧАктаПриемки;
                // *** Start programmer edit section *** (ТН.ТЧАктаПриемки Get end)

                // *** End programmer edit section *** (ТН.ТЧАктаПриемки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.ТЧАктаПриемки Set start)

                // *** End programmer edit section *** (ТН.ТЧАктаПриемки Set start)
                this.fТЧАктаПриемки = value;
                // *** Start programmer edit section *** (ТН.ТЧАктаПриемки Set end)

                // *** End programmer edit section *** (ТН.ТЧАктаПриемки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТНE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТНE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТНE", typeof(IIS.KRnovyjj.ТН));
                }
            }
            
            /// <summary>
            /// "ТНL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТНL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТНL", typeof(IIS.KRnovyjj.ТН));
                }
            }
        }
    }
}
