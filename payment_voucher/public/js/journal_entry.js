frappe.ui.form.on('Journal Entry', {
    refresh: function (frm) {
        
    },
    custom_master_towel_costing: function(frm) {
        $.each(frm.doc.accounts || [], function(i, row) {
            frappe.model.set_value(row.doctype, row.name, 'master_towel_costing', frm.doc.custom_master_towel_costing);
        });
        frm.refresh_field('accounts');
    }
});