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
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "ФИО as \'ФИО\'",
            "Кладовщик as \'Кладовщик\'",
            "Табель as \'Табель\'"})]
    [View("СотрудникиL", new string[] {
            "ФИО as \'ФИО\'",
            "Кладовщик as \'Кладовщик\'",
            "Табель as \'Табель\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private string fКладовщик;
        
        private int fТабель;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// Кладовщик.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Кладовщик CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Кладовщик CustomAttributes)
        [StrLen(255)]
        public virtual string Кладовщик
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Кладовщик Get start)

                // *** End programmer edit section *** (Сотрудники.Кладовщик Get start)
                string result = this.fКладовщик;
                // *** Start programmer edit section *** (Сотрудники.Кладовщик Get end)

                // *** End programmer edit section *** (Сотрудники.Кладовщик Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Кладовщик Set start)

                // *** End programmer edit section *** (Сотрудники.Кладовщик Set start)
                this.fКладовщик = value;
                // *** Start programmer edit section *** (Сотрудники.Кладовщик Set end)

                // *** End programmer edit section *** (Сотрудники.Кладовщик Set end)
            }
        }
        
        /// <summary>
        /// Табель.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Табель CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Табель CustomAttributes)
        public virtual int Табель
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Табель Get start)

                // *** End programmer edit section *** (Сотрудники.Табель Get start)
                int result = this.fТабель;
                // *** Start programmer edit section *** (Сотрудники.Табель Get end)

                // *** End programmer edit section *** (Сотрудники.Табель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Табель Set start)

                // *** End programmer edit section *** (Сотрудники.Табель Set start)
                this.fТабель = value;
                // *** Start programmer edit section *** (Сотрудники.Табель Set end)

                // *** End programmer edit section *** (Сотрудники.Табель Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ФИО CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Get start)

                // *** End programmer edit section *** (Сотрудники.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Сотрудники.ФИО Get end)

                // *** End programmer edit section *** (Сотрудники.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Set start)

                // *** End programmer edit section *** (Сотрудники.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Сотрудники.ФИО Set end)

                // *** End programmer edit section *** (Сотрудники.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.KRnovyjj.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.KRnovyjj.Сотрудники));
                }
            }
        }
    }
}
