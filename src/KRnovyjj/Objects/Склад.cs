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
    /// Склад.
    /// </summary>
    // *** Start programmer edit section *** (Склад CustomAttributes)

    // *** End programmer edit section *** (Склад CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СкладE", new string[] {
            "КодСклада as \'Код склада\'",
            "ИмяСклада as \'Имя склада\'",
            "ТЧАктаПриемки as \'Т ч акта приемки\'",
            "ТЧАктаПриемки.НомерПозиции as \'Номер позиции\'"}, Hidden=new string[] {
            "ТЧАктаПриемки.НомерПозиции"})]
    [MasterViewDefineAttribute("СкладE", "ТЧАктаПриемки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомерПозиции")]
    [View("СкладL", new string[] {
            "КодСклада as \'Код склада\'",
            "ИмяСклада as \'Имя склада\'",
            "ТЧАктаПриемки.НомерПозиции as \'Номер позиции\'"})]
    public class Склад : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодСклада;
        
        private string fИмяСклада;
        
        private IIS.KRnovyjj.ТЧАктаПриемки fТЧАктаПриемки;
        
        // *** Start programmer edit section *** (Склад CustomMembers)

        // *** End programmer edit section *** (Склад CustomMembers)

        
        /// <summary>
        /// ИмяСклада.
        /// </summary>
        // *** Start programmer edit section *** (Склад.ИмяСклада CustomAttributes)

        // *** End programmer edit section *** (Склад.ИмяСклада CustomAttributes)
        [StrLen(255)]
        public virtual string ИмяСклада
        {
            get
            {
                // *** Start programmer edit section *** (Склад.ИмяСклада Get start)

                // *** End programmer edit section *** (Склад.ИмяСклада Get start)
                string result = this.fИмяСклада;
                // *** Start programmer edit section *** (Склад.ИмяСклада Get end)

                // *** End programmer edit section *** (Склад.ИмяСклада Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Склад.ИмяСклада Set start)

                // *** End programmer edit section *** (Склад.ИмяСклада Set start)
                this.fИмяСклада = value;
                // *** Start programmer edit section *** (Склад.ИмяСклада Set end)

                // *** End programmer edit section *** (Склад.ИмяСклада Set end)
            }
        }
        
        /// <summary>
        /// КодСклада.
        /// </summary>
        // *** Start programmer edit section *** (Склад.КодСклада CustomAttributes)

        // *** End programmer edit section *** (Склад.КодСклада CustomAttributes)
        public virtual int КодСклада
        {
            get
            {
                // *** Start programmer edit section *** (Склад.КодСклада Get start)

                // *** End programmer edit section *** (Склад.КодСклада Get start)
                int result = this.fКодСклада;
                // *** Start programmer edit section *** (Склад.КодСклада Get end)

                // *** End programmer edit section *** (Склад.КодСклада Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Склад.КодСклада Set start)

                // *** End programmer edit section *** (Склад.КодСклада Set start)
                this.fКодСклада = value;
                // *** Start programmer edit section *** (Склад.КодСклада Set end)

                // *** End programmer edit section *** (Склад.КодСклада Set end)
            }
        }
        
        /// <summary>
        /// Склад.
        /// </summary>
        // *** Start programmer edit section *** (Склад.ТЧАктаПриемки CustomAttributes)

        // *** End programmer edit section *** (Склад.ТЧАктаПриемки CustomAttributes)
        [PropertyStorage(new string[] {
                "ТЧАктаПриемки"})]
        [NotNull()]
        public virtual IIS.KRnovyjj.ТЧАктаПриемки ТЧАктаПриемки
        {
            get
            {
                // *** Start programmer edit section *** (Склад.ТЧАктаПриемки Get start)

                // *** End programmer edit section *** (Склад.ТЧАктаПриемки Get start)
                IIS.KRnovyjj.ТЧАктаПриемки result = this.fТЧАктаПриемки;
                // *** Start programmer edit section *** (Склад.ТЧАктаПриемки Get end)

                // *** End programmer edit section *** (Склад.ТЧАктаПриемки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Склад.ТЧАктаПриемки Set start)

                // *** End programmer edit section *** (Склад.ТЧАктаПриемки Set start)
                this.fТЧАктаПриемки = value;
                // *** Start programmer edit section *** (Склад.ТЧАктаПриемки Set end)

                // *** End programmer edit section *** (Склад.ТЧАктаПриемки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СкладE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СкладE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СкладE", typeof(IIS.KRnovyjj.Склад));
                }
            }
            
            /// <summary>
            /// "СкладL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СкладL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СкладL", typeof(IIS.KRnovyjj.Склад));
                }
            }
        }
    }
}
