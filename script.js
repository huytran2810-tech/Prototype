// Professional Warehouse Management System
// Data structure similar to professional warehouse applications

// Sample data - Original structure
let inventory = [
    {
        id: 1,
        code: 'GOT-CER-3060-WK',
        name: 'Gạch ốp tường Ceramic 30x60cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '30x60cm',
        color: 'Trắng kem',
        importPrice: 450000,
        referencePrice: 520000,
        stock: 25,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: [
            { batchId: 'L001', quantity: 25, used: 0 }
        ]
    },
    {
        id: 2,
        code: 'GLN-GRA-4040-XD',
        name: 'Gạch lát nền Granite 40x40cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '40x40cm',
        color: 'Xám đá',
        importPrice: 380000,
        referencePrice: 450000,
        stock: 20,
        supplier: 'Công ty Gạch Bình Dương',
        batches: [
            { batchId: 'L002', quantity: 20, used: 0 }
        ]
    },
    {
        id: 3,
        code: 'GTT-MOS-1010-XN',
        name: 'Gạch trang trí Mosaic 10x10cm',
        category: 'Gạch trang trí',
        unit: 'Hộp',
        size: '10x10cm',
        color: 'Xanh ngọc',
        importPrice: 280000,
        referencePrice: 320000,
        stock: 15,
        supplier: 'Công ty Gạch Long An',
        batches: [
            { batchId: 'L003', quantity: 15, used: 0 }
        ]
    },
    {
        id: 4,
        code: 'GOT-CER-2540-VC',
        name: 'Gạch ốp tường Ceramic 25x40cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '25x40cm',
        color: 'Vàng cát',
        importPrice: 320000,
        referencePrice: 380000,
        stock: 30,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: [
            { batchId: 'L001', quantity: 30, used: 0 }
        ]
    },
    {
        id: 5,
        code: 'GLN-POR-5050-NG',
        name: 'Gạch lát nền Porcelain 50x50cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '50x50cm',
        color: 'Nâu gỗ',
        importPrice: 520000,
        referencePrice: 600000,
        stock: 18,
        supplier: 'Công ty Gạch Bình Dương',
        batches: []
    },
    {
        id: 6,
        code: 'GOT-CER-2030-XL',
        name: 'Gạch ốp tường Ceramic 20x30cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '20x30cm',
        color: 'Xanh lá',
        importPrice: 280000,
        referencePrice: 330000,
        stock: 22,
        supplier: 'Công ty Gạch Long An',
        batches: [
            { batchId: 'L003', quantity: 22, used: 0 }
        ]
    },
    {
        id: 7,
        code: 'GLN-GRA-6060-DB',
        name: 'Gạch lát nền Granite 60x60cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '60x60cm',
        color: 'Đen bóng',
        importPrice: 680000,
        referencePrice: 780000,
        stock: 12,
        supplier: 'Công ty Gạch Bình Dương',
        batches: [
            { batchId: 'L002', quantity: 12, used: 0 }
        ]
    },
    {
        id: 8,
        code: 'GTT-MOS-1515-DG',
        name: 'Gạch trang trí Mosaic 15x15cm',
        category: 'Gạch trang trí',
        unit: 'Hộp',
        size: '15x15cm',
        color: 'Đỏ gạch',
        importPrice: 350000,
        referencePrice: 400000,
        stock: 8,
        supplier: 'Công ty Gạch Long An',
        batches: [
            { batchId: 'L003', quantity: 8, used: 0 }
        ]
    },
    {
        id: 9,
        code: 'GOT-CER-3045-XN',
        name: 'Gạch ốp tường Ceramic 30x45cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '30x45cm',
        color: 'Xám nhạt',
        importPrice: 420000,
        referencePrice: 480000,
        stock: 28,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: [
            { batchId: 'L001', quantity: 28, used: 0 }
        ]
    },
    {
        id: 10,
        code: 'GLN-POR-4545-TS',
        name: 'Gạch lát nền Porcelain 45x45cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '45x45cm',
        color: 'Trắng sứ',
        importPrice: 450000,
        referencePrice: 520000,
        stock: 35,
        supplier: 'Công ty Gạch Bình Dương',
        batches: [
            { batchId: 'L002', quantity: 35, used: 0 }
        ]
    },
    {
        id: 11,
        code: 'GOT-CER-2550-BK',
        name: 'Gạch ốp tường Ceramic 25x50cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '25x50cm',
        color: 'Be kem',
        importPrice: 380000,
        referencePrice: 440000,
        stock: 24,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: []
    },
    {
        id: 12,
        code: 'GLN-GRA-3030-XD',
        name: 'Gạch lát nền Granite 30x30cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '30x30cm',
        color: 'Xanh đen',
        importPrice: 320000,
        referencePrice: 370000,
        stock: 40,
        supplier: 'Công ty Gạch Bình Dương',
        batches: []
    },
    {
        id: 13,
        code: 'GTT-MOS-2020-VK',
        name: 'Gạch trang trí Mosaic 20x20cm',
        category: 'Gạch trang trí',
        unit: 'Hộp',
        size: '20x20cm',
        color: 'Vàng kim',
        importPrice: 420000,
        referencePrice: 480000,
        stock: 10,
        supplier: 'Công ty Gạch Long An',
        batches: []
    },
    {
        id: 14,
        code: 'GOT-CER-3535-HP',
        name: 'Gạch ốp tường Ceramic 35x35cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '35x35cm',
        color: 'Hồng phấn',
        importPrice: 350000,
        referencePrice: 400000,
        stock: 16,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: []
    },
    {
        id: 15,
        code: 'GLN-POR-5555-XB',
        name: 'Gạch lát nền Porcelain 55x55cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '55x55cm',
        color: 'Xám bạc',
        importPrice: 580000,
        referencePrice: 660000,
        stock: 14,
        supplier: 'Công ty Gạch Bình Dương',
        batches: []
    },
    {
        id: 16,
        code: 'GOT-CER-2040-XD',
        name: 'Gạch ốp tường Ceramic 20x40cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '20x40cm',
        color: 'Xanh dương',
        importPrice: 300000,
        referencePrice: 350000,
        stock: 32,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: []
    },
    {
        id: 17,
        code: 'GLN-GRA-4545-ND',
        name: 'Gạch lát nền Granite 45x45cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '45x45cm',
        color: 'Nâu đậm',
        importPrice: 480000,
        referencePrice: 550000,
        stock: 26,
        supplier: 'Công ty Gạch Bình Dương',
        batches: []
    },
    {
        id: 18,
        code: 'GTT-MOS-1212-TT',
        name: 'Gạch trang trí Mosaic 12x12cm',
        category: 'Gạch trang trí',
        unit: 'Hộp',
        size: '12x12cm',
        color: 'Tím than',
        importPrice: 320000,
        referencePrice: 370000,
        stock: 12,
        supplier: 'Công ty Gạch Long An',
        batches: []
    },
    {
        id: 19,
        code: 'GOT-CER-3030-XNB',
        name: 'Gạch ốp tường Ceramic 30x30cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '30x30cm',
        color: 'Xanh ngọc bích',
        importPrice: 280000,
        referencePrice: 330000,
        stock: 38,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: []
    },
    {
        id: 20,
        code: 'GLN-POR-4040-TN',
        name: 'Gạch lát nền Porcelain 40x40cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '40x40cm',
        color: 'Trắng ngà',
        importPrice: 420000,
        referencePrice: 480000,
        stock: 42,
        supplier: 'Công ty Gạch Bình Dương',
        batches: []
    },
    {
        id: 21,
        code: 'GOT-CER-2535-CD',
        name: 'Gạch ốp tường Ceramic 25x35cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '25x35cm',
        color: 'Cam đất',
        importPrice: 340000,
        referencePrice: 390000,
        stock: 20,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: []
    },
    {
        id: 22,
        code: 'GLN-GRA-5050-DX',
        name: 'Gạch lát nền Granite 50x50cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '50x50cm',
        color: 'Đen xám',
        importPrice: 550000,
        referencePrice: 630000,
        stock: 18,
        supplier: 'Công ty Gạch Bình Dương',
        batches: []
    },
    {
        id: 23,
        code: 'GTT-MOS-1818-XLC',
        name: 'Gạch trang trí Mosaic 18x18cm',
        category: 'Gạch trang trí',
        unit: 'Hộp',
        size: '18x18cm',
        color: 'Xanh lá cây',
        importPrice: 380000,
        referencePrice: 430000,
        stock: 9,
        supplier: 'Công ty Gạch Long An',
        batches: []
    },
    {
        id: 24,
        code: 'GOT-CER-3540-HSH',
        name: 'Gạch ốp tường Ceramic 35x40cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '35x40cm',
        color: 'Hồng san hô',
        importPrice: 400000,
        referencePrice: 460000,
        stock: 22,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: []
    },
    {
        id: 25,
        code: 'GLN-POR-6060-XX',
        name: 'Gạch lát nền Porcelain 60x60cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '60x60cm',
        color: 'Xám xanh',
        importPrice: 720000,
        referencePrice: 820000,
        stock: 8,
        supplier: 'Công ty Gạch Bình Dương',
        batches: []
    },
    {
        id: 26,
        code: 'GOT-CER-2025-VC',
        name: 'Gạch ốp tường Ceramic 20x25cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '20x25cm',
        color: 'Vàng chanh',
        importPrice: 260000,
        referencePrice: 300000,
        stock: 45,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: []
    },
    {
        id: 27,
        code: 'GLN-GRA-3535-NS',
        name: 'Gạch lát nền Granite 35x35cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '35x35cm',
        color: 'Nâu sáng',
        importPrice: 380000,
        referencePrice: 440000,
        stock: 30,
        supplier: 'Công ty Gạch Bình Dương',
        batches: []
    },
    {
        id: 28,
        code: 'GTT-MOS-1616-DB',
        name: 'Gạch trang trí Mosaic 16x16cm',
        category: 'Gạch trang trí',
        unit: 'Hộp',
        size: '16x16cm',
        color: 'Đỏ burgundy',
        importPrice: 360000,
        referencePrice: 410000,
        stock: 11,
        supplier: 'Công ty Gạch Long An',
        batches: []
    },
    {
        id: 29,
        code: 'GOT-CER-3050-XM',
        name: 'Gạch ốp tường Ceramic 30x50cm',
        category: 'Gạch ốp tường',
        unit: 'Hộp',
        size: '30x50cm',
        color: 'Xanh mint',
        importPrice: 440000,
        referencePrice: 500000,
        stock: 19,
        supplier: 'Công ty Gạch Đồng Nai',
        batches: []
    },
    {
        id: 30,
        code: 'GLN-POR-4545-TT',
        name: 'Gạch lát nền Porcelain 45x45cm',
        category: 'Gạch lát nền',
        unit: 'Hộp',
        size: '45x45cm',
        color: 'Trắng tuyết',
        importPrice: 480000,
        referencePrice: 550000,
        stock: 36,
        supplier: 'Công ty Gạch Bình Dương',
        batches: []
    }
];

let orders = [
    {
        id: 'DH001',
        customer: 'Công ty Xây dựng ABC',
        phone: '0901234567',
        address: '123 Đường ABC, Quận 1, TP.HCM',
        date: '2024-01-20',
        items: [
            { productId: 1, quantity: 5, price: 520000 },
            { productId: 2, quantity: 3, price: 450000 }
        ],
        status: 'Hoàn thành',
        total: 3950000
    },
    {
        id: 'DH002',
        customer: 'Nhà thầu XYZ',
        phone: '0907654321',
        address: '456 Đường XYZ, Quận 3, TP.HCM',
        date: '2024-01-22',
        items: [
            { productId: 3, quantity: 2, price: 320000 },
            { productId: 4, quantity: 4, price: 380000 }
        ],
        status: 'Đang xử lý',
        total: 2160000
    },
    {
        id: 'DH003',
        customer: 'Công ty Xây dựng ABC',
        phone: '0901234567',
        address: '123 Đường ABC, Quận 1, TP.HCM',
        date: '2024-01-24',
        items: [
            { productId: 5, quantity: 4, price: 600000 },
            { productId: 7, quantity: 2, price: 780000 }
        ],
        status: 'Hoàn thành',
        total: 3960000
    },
    {
        id: 'DH004',
        customer: 'Nhà thầu XYZ',
        phone: '0907654321',
        address: '456 Đường XYZ, Quận 3, TP.HCM',
        date: '2024-01-26',
        items: [
            { productId: 10, quantity: 10, price: 520000 },
            { productId: 12, quantity: 8, price: 370000 }
        ],
        status: 'Đang xử lý',
        total: 8160000
    },
    {
        id: 'DH005',
        customer: 'Cửa hàng VLXD Minh Tâm',
        phone: '0912345678',
        address: '789 Đường DEF, Quận 5, TP.HCM',
        date: '2024-01-25',
        items: [
            { productId: 1, quantity: 2, price: 520000 },
            { productId: 3, quantity: 5, price: 320000 }
        ],
        status: 'Hoàn thành',
        total: 2640000
    }
];

let batches = [
    {
        id: 'L001',
        date: '2024-01-15',
        supplier: 'Công ty Gạch Đồng Nai',
        products: [
            { productId: 1, quantity: 25, used: 0 },
            { productId: 4, quantity: 30, used: 0 },
            { productId: 9, quantity: 28, used: 0 }
        ],
        status: 'Còn hàng'
    },
    {
        id: 'L002',
        date: '2024-01-18',
        supplier: 'Công ty Gạch Bình Dương',
        products: [
            { productId: 2, quantity: 20, used: 0 },
            { productId: 7, quantity: 12, used: 0 },
            { productId: 10, quantity: 35, used: 0 }
        ],
        status: 'Còn hàng'
    },
    {
        id: 'L003',
        date: '2024-01-22',
        supplier: 'Công ty Gạch Long An',
        products: [
            { productId: 3, quantity: 15, used: 0 },
            { productId: 6, quantity: 22, used: 0 },
            { productId: 8, quantity: 8, used: 0 }
        ],
        status: 'Còn hàng'
    }
];

let currentOrderId = 3;
let currentBatchId = 4;
let payments = [
    { customerName: 'Công ty Xây dựng ABC', customerPhone: '0901234567', amount: 1000000, date: '2024-01-25', note: 'Thanh toán đợt 1' },
    { customerName: 'Công ty Xây dựng ABC', customerPhone: '0901234567', amount: 500000, date: '2024-01-28', note: 'Thanh toán đợt 2' },
    { customerName: 'Nhà thầu XYZ', customerPhone: '0907654321', amount: 300000, date: '2024-01-26', note: 'Trả trước' }
];

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

function formatNumber(number) {
    return new Intl.NumberFormat('vi-VN').format(number);
}

function getStatusClass(status) {
    switch (status) {
        case 'Còn hàng':
        case 'Hoàn thành':
            return 'status-in-stock';
        case 'Sắp hết':
        case 'Đang xử lý':
            return 'status-low-stock';
        case 'Hết hàng':
        case 'Hủy':
            return 'status-out-of-stock';
        case 'Đã xuất phiếu':
            return 'status-exported';
        default:
            return 'status-pending';
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    setupEventListeners();
    updateInventoryDisplay();
    updateOrdersDisplay();
    updateBatchesDisplay();
    updateReportsDisplay();
    setupColumnFilters();
    
    // Expose functions for inline/use in dynamic handlers
    window.viewProductBatches = viewProductBatches;
    window.viewOrderDetail = viewOrderDetail;
    window.addOrderItem = addOrderItem;
    window.addImportItem = addImportItem;
    window.editBatch = editBatch;
    window.removeProductFromBatch = removeProductFromBatch;
});

// Load data from localStorage
function loadData() {
    // Clear old data to use new sample data
    localStorage.removeItem('warehouse_inventory');
    localStorage.removeItem('warehouse_orders');
    localStorage.removeItem('warehouse_batches');
    localStorage.removeItem('warehouse_current_order_id');
    localStorage.removeItem('warehouse_current_batch_id');
    
    // Use the new sample data defined above
    // inventory, orders, batches are already initialized with new data
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('warehouse_inventory', JSON.stringify(inventory));
    localStorage.setItem('warehouse_orders', JSON.stringify(orders));
    localStorage.setItem('warehouse_batches', JSON.stringify(batches));
    localStorage.setItem('warehouse_payments', JSON.stringify(payments));
    localStorage.setItem('warehouse_current_order_id', currentOrderId.toString());
    localStorage.setItem('warehouse_current_batch_id', currentBatchId.toString());
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    // Search functionality
    document.getElementById('search-inventory').addEventListener('input', function() {
        filterInventory();
    });
    
    document.getElementById('search-orders').addEventListener('input', function() {
        filterTable('orders-table');
    });
    
    document.getElementById('search-reports').addEventListener('input', function() {
        filterTable('inventory-summary-table');
        filterTable('inventory-detail-table');
    });
    const searchDebts = document.getElementById('search-debts');
    if (searchDebts) {
        searchDebts.addEventListener('input', function() {
            filterTable('debts-table');
        });
    }
    
    // Column filters
    setupColumnFilters();
    
    // Add product row buttons
    const addOrderBtn = document.getElementById('add-item-btn');
    if (addOrderBtn) addOrderBtn.addEventListener('click', addOrderItem);
    const addImportBtn = document.getElementById('add-import-item-btn');
    if (addImportBtn) addImportBtn.addEventListener('click', addImportItem);

    // Submit handlers
    const orderForm = document.getElementById('order-form');
    if (orderForm) orderForm.addEventListener('submit', handleCreateOrder);
    const importForm = document.getElementById('import-form');
    if (importForm) importForm.addEventListener('submit', handleImportProducts);

    // Debt history lookup when typing phone on create order
    const phoneInput = document.getElementById('customer-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            showDebtHistoryByPhone(this.value.trim());
        });
        phoneInput.addEventListener('blur', function() {
            showDebtHistoryByPhone(this.value.trim());
        });
    }
    
    // Export buttons
    document.getElementById('export-inventory-btn').addEventListener('click', function() {
        exportToCSV('inventory-table', 'danh_sach_kho_hang.csv');
    });
    
    document.getElementById('export-orders-btn').addEventListener('click', function() {
        exportToCSV('orders-table', 'danh_sach_don_hang.csv');
    });
    
    document.getElementById('export-batches-btn').addEventListener('click', function() {
        exportToCSV('batches-table', 'danh_sach_lo_hang.csv');
    });
    
    document.getElementById('export-summary-btn').addEventListener('click', function() {
        exportToCSV('inventory-summary-table', 'bao_cao_ton_kho_tong_quat.csv');
    });
    const exportDebtsBtn = document.getElementById('export-debts-btn');
    if (exportDebtsBtn) {
        exportDebtsBtn.addEventListener('click', function() {
            exportToCSV('debts-table', 'quan_ly_cong_no.csv');
        });
    }
    
    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    // Save batch button in edit modal
    const saveBatchBtn = document.getElementById('save-batch-btn');
    if (saveBatchBtn) {
        saveBatchBtn.addEventListener('click', saveBatchChanges);
    }
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId + '-page').classList.add('active');
    
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
    
    // Update displays based on page
    switch(pageId) {
        case 'inventory':
            updateInventoryDisplay();
            break;
        case 'orders':
            updateOrdersDisplay();
            break;
        case 'batches':
            updateBatchesDisplay();
            break;
        case 'reports':
            updateReportsDisplay();
            break;
        case 'import':
            initializeImportPage();
            break;
        case 'debts':
            updateDebtsDisplay();
            break;
    }
}

// Pagination variables
let currentPage = {
    inventory: 1,
    orders: 1,
    batches: 1,
    reports: 1,
    debts: 1
};

let pageSize = {
    inventory: 25,
    orders: 25,
    batches: 25,
    reports: 25,
    debts: 25
};

let filteredData = {
    inventory: [],
    orders: [],
    batches: [],
    reports: [],
    debts: []
};

// Inventory functions
function updateInventoryDisplay() {
    const tbody = document.getElementById('inventory-tbody');
    tbody.innerHTML = '';
    
    // Apply filters first
    filteredData.inventory = inventory.filter(item => {
        const searchTerm = document.getElementById('search-inventory').value.toLowerCase();
        if (searchTerm) {
            const searchText = `${item.code} ${item.name} ${item.category} ${item.size} ${item.color}`.toLowerCase();
            if (!searchText.includes(searchTerm)) return false;
        }
        return true;
    });
    
    // Calculate pagination
    const totalRecords = filteredData.inventory.length;
    const totalPages = Math.ceil(totalRecords / pageSize.inventory);
    const startIndex = (currentPage.inventory - 1) * pageSize.inventory;
    const endIndex = Math.min(startIndex + pageSize.inventory, totalRecords);
    
    // Update pagination info
    document.getElementById('inventory-total-records').textContent = totalRecords;
    
    // Display current page data
    const currentData = filteredData.inventory.slice(startIndex, endIndex);
    currentData.forEach(item => {
        const status = getStockStatus(item.stock);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.size}</td>
            <td>${item.color}</td>
            <td>${item.unit}</td>
            <td>${formatCurrency(item.referencePrice)}</td>
            <td>${formatNumber(item.stock)}</td>
            <td><span class="status-badge ${getStatusClass(status)}">${status}</span></td>
            <td>
                <button type="button" class="btn btn-small btn-info btn-view-product-batches" data-id="${item.id}">
                    <i class="fas fa-eye"></i> Chi tiết
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Update pagination controls
    updatePagination('inventory', totalPages);

    // Bind detail buttons after render
    document.querySelectorAll('.btn-view-product-batches').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            viewProductBatches(id);
        });
    });
}

function getStockStatus(stock) {
    if (stock === 0) return 'Hết hàng';
    if (stock < 50) return 'Sắp hết';
    return 'Còn hàng';
}

// Orders functions
function updateOrdersDisplay() {
    const tbody = document.getElementById('orders-tbody');
    tbody.innerHTML = '';
    
    // Apply filters first
    filteredData.orders = orders.filter(order => {
        const searchTerm = document.getElementById('search-orders').value.toLowerCase();
        if (searchTerm) {
            const searchText = `${order.id} ${order.customerName} ${order.date}`.toLowerCase();
            if (!searchText.includes(searchTerm)) return false;
        }
        return true;
    });
    
    // Calculate pagination
    const totalRecords = filteredData.orders.length;
    const totalPages = Math.ceil(totalRecords / pageSize.orders);
    const startIndex = (currentPage.orders - 1) * pageSize.orders;
    const endIndex = Math.min(startIndex + pageSize.orders, totalRecords);
    
    // Update pagination info
    document.getElementById('orders-total-records').textContent = totalRecords;
    
    // Display current page data
    const currentData = filteredData.orders.slice(startIndex, endIndex);
    currentData.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customerName}</td>
            <td>${order.date}</td>
            <td>${formatCurrency(order.total)}</td>
            <td>
                <select class="status-select" data-order-id="${order.id}">
                    <option value="Đang xử lý" ${order.status === 'Đang xử lý' ? 'selected' : ''}>Đang xử lý</option>
                    <option value="Hoàn thành" ${order.status === 'Hoàn thành' ? 'selected' : ''}>Hoàn thành</option>
                    <option value="Hủy" ${order.status === 'Hủy' ? 'selected' : ''}>Hủy</option>
                    <option value="Đã xuất phiếu" ${order.status === 'Đã xuất phiếu' ? 'selected' : ''}>Đã xuất phiếu</option>
                </select>
            </td>
            <td>
                <button type="button" class="btn btn-small btn-primary btn-view-order" data-id="${order.id}">
                    <i class="fas fa-eye"></i> Xem
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Add event listeners for status changes
    document.querySelectorAll('.status-select').forEach(select => {
        select.addEventListener('change', function() {
            const orderId = this.getAttribute('data-order-id');
            const newStatus = this.value;
            updateOrderStatus(orderId, newStatus);
        });
    });
    
    // Update pagination controls
    updatePagination('orders', totalPages);

    // Bind view buttons after render
    document.querySelectorAll('.btn-view-order').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            viewOrderDetail(id);
        });
    });
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveData();
        updateOrdersDisplay();
        showToast(`Đã cập nhật trạng thái đơn hàng ${orderId} thành ${newStatus}`, 'success');
    }
}

function viewOrderDetail(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    const modal = document.getElementById('order-detail-modal');
    const content = document.getElementById('order-detail-content');
    
    let productsHtml = '';
    order.products.forEach(product => {
        productsHtml += `
            <tr>
                <td>${product.code}</td>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>${formatCurrency(product.price)}</td>
                <td>${formatCurrency(product.quantity * product.price)}</td>
            </tr>
        `;
    });
    
    content.innerHTML = `
        <div class="order-detail">
            <h4>Thông tin đơn hàng #${order.id}</h4>
            <p><strong>Khách hàng:</strong> ${order.customerName}</p>
            <p><strong>Số điện thoại:</strong> ${order.customerPhone}</p>
            <p><strong>Địa chỉ:</strong> ${order.customerAddress}</p>
            <p><strong>Ngày tạo:</strong> ${order.date}</p>
            <p><strong>Trạng thái:</strong> <span class="status-badge ${getStatusClass(order.status)}">${order.status}</span></p>
            
            <h5>Danh sách sản phẩm:</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    ${productsHtml}
                </tbody>
            </table>
            
            <div class="order-total">
                <h4>Tổng cộng: ${formatCurrency(order.total)}</h4>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';

    // Bind export buttons for this order
    const fullBtn = document.getElementById('export-order-full-btn');
    const simpleBtn = document.getElementById('export-order-simple-btn');
    if (fullBtn) {
        fullBtn.onclick = () => exportOrderReceipt(order.id, true);
    }
    if (simpleBtn) {
        simpleBtn.onclick = () => exportOrderReceipt(order.id, false);
    }
}

// Inventory detail (product) modal
function viewProductBatches(productId) {
    const product = inventory.find(p => p.id === productId);
    if (!product) return;
    const modal = document.getElementById('product-batch-modal');
    const content = document.getElementById('product-batch-content');
    let rows = '';
    let totalRemaining = 0;
    product.batches.forEach(b => {
        const batch = batches.find(x => x.id === b.batchId);
        const used = b.used || 0;
        const remaining = Math.max(0, (b.quantity || 0) - used);
        totalRemaining += remaining;
        if (remaining <= 0) return; // chỉ hiển thị lô còn hàng
        rows += `
            <tr>
                <td>${b.batchId}</td>
                <td>${batch ? String(batch.date) : ''}</td>
                <td>${batch ? batch.supplier : ''}</td>
                <td class="text-right">${formatNumber(remaining)}</td>
            </tr>
        `;
    });
    content.innerHTML = `
        <div class="form-section">
            <h3>${product.code} - ${product.name}</h3>
            <p><strong>Danh mục:</strong> ${product.category} • <strong>Kích thước:</strong> ${product.size} • <strong>Màu:</strong> ${product.color}</p>
            <table class="table">
                <thead>
                    <tr>
                        <th>Mã lô</th>
                        <th>Ngày nhập</th>
                        <th>Nhà cung cấp</th>
                        <th class="text-right">Còn lại</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
            <div class="table-footer">
                <div class="total-records">Tổng còn lại: <strong>${formatNumber(totalRemaining)}</strong> ${product.unit || ''}</div>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

// Batches functions
function updateBatchesDisplay() {
    const tbody = document.getElementById('batches-tbody');
    tbody.innerHTML = '';
    
    // Apply filters first
    filteredData.batches = batches.filter(batch => {
        return true; // No search filter for batches yet
    });
    
    // Calculate pagination
    const totalRecords = filteredData.batches.length;
    const totalPages = Math.ceil(totalRecords / pageSize.batches);
    const startIndex = (currentPage.batches - 1) * pageSize.batches;
    const endIndex = Math.min(startIndex + pageSize.batches, totalRecords);
    
    // Update pagination info
    document.getElementById('batches-total-records').textContent = totalRecords;
    
    // Display current page data
    const currentData = filteredData.batches.slice(startIndex, endIndex);
    currentData.forEach(batch => {
        const totalProducts = batch.products.length;
        const totalQuantity = batch.products.reduce((sum, p) => sum + p.quantity, 0);
        const totalUsed = batch.products.reduce((sum, p) => sum + p.used, 0);
        const remaining = totalQuantity - totalUsed;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${batch.id}</td>
            <td>${String(batch.date)}</td>
            <td>${batch.supplier}</td>
            <td>${totalProducts}</td>
            <td>${formatNumber(totalQuantity)}</td>
            <td>${formatNumber(totalUsed)}</td>
            <td>${formatNumber(remaining)}</td>
            <td><span class="status-badge ${getStatusClass(batch.status)}">${batch.status}</span></td>
            <td>
                <button class="btn btn-small btn-primary" onclick="viewBatchDetail('${batch.id}')">
                    <i class="fas fa-eye"></i> Chi tiết
                </button>
                <button class="btn btn-small btn-secondary" onclick="editBatch('${batch.id}')">
                    <i class="fas fa-edit"></i> Sửa
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Update pagination controls
    updatePagination('batches', totalPages);
}

function viewBatchDetail(batchId) {
    const batch = batches.find(b => b.id === batchId);
    if (!batch) return;
    
    const modal = document.getElementById('batch-detail-modal');
    const content = document.getElementById('batch-detail-content');
    
    let productsHtml = '';
    batch.products.forEach(productData => {
        const product = inventory.find(p => p.id === productData.productId);
        if (product) {
            productsHtml += `
                <tr>
                    <td>${product.code}</td>
                    <td>${product.name}</td>
                    <td>${product.unit}</td>
                    <td>${formatNumber(productData.quantity)}</td>
                    <td>${formatNumber(productData.used)}</td>
                    <td>${formatNumber(productData.quantity - productData.used)}</td>
                </tr>
            `;
        }
    });
    
    content.innerHTML = `
        <div class="batch-detail">
            <h4>Thông tin lô hàng ${batch.id}</h4>
            <p><strong>Nhà cung cấp:</strong> ${batch.supplier}</p>
            <p><strong>Ngày nhập:</strong> ${batch.date}</p>
            <p><strong>Trạng thái:</strong> <span class="status-badge ${getStatusClass(batch.status)}">${batch.status}</span></p>
            
            <h5>Danh sách sản phẩm:</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn vị</th>
                        <th>Số lượng ban đầu</th>
                        <th>Đã sử dụng</th>
                        <th>Còn lại</th>
                    </tr>
                </thead>
                <tbody>
                    ${productsHtml}
                </tbody>
            </table>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Reports functions
function updateReportsDisplay() {
    updateInventorySummary();
    updateInventoryDetail();
}

// Batch edit functions
function editBatch(batchId) {
    const batch = batches.find(b => b.id === batchId);
    if (!batch) return;
    const modal = document.getElementById('edit-batch-modal');
    // Fill basic fields
    document.getElementById('edit-batch-id').value = batch.id;
    document.getElementById('edit-batch-supplier').value = batch.supplier || '';
    document.getElementById('edit-batch-date').value = (String(batch.date) || '').slice(0, 10);

    // Build products table
    const tbody = document.getElementById('edit-batch-products-tbody');
    tbody.innerHTML = '';
    batch.products.forEach((productData, index) => {
        const product = inventory.find(p => p.id === productData.productId);
        if (!product) return;
        const remaining = Math.max(0, (productData.quantity || 0) - (productData.used || 0));
        const tr = document.createElement('tr');
        tr.setAttribute('data-index', String(index));
        tr.innerHTML = `
            <td>${product.code}</td>
            <td>${product.name}</td>
            <td><input type=\"number\" min=\"0\" class=\"edit-qty\" value=\"${productData.quantity}\" /></td>
            <td><input type=\"number\" min=\"0\" class=\"edit-used\" value=\"${productData.used}\" /></td>
            <td class=\"edit-remaining\">${formatNumber(remaining)}</td>
            <td>
                <button type=\"button\" class=\"btn btn-small btn-danger\" onclick=\"removeProductFromBatch(${index})\"><i class=\"fas fa-trash\"></i> Xóa</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Bind change listeners to update remaining on-the-fly
    tbody.querySelectorAll('tr').forEach(tr => {
        const qtyInput = tr.querySelector('.edit-qty');
        const usedInput = tr.querySelector('.edit-used');
        [qtyInput, usedInput].forEach(inp => {
            inp.addEventListener('input', () => updateRemaining(tr));
            inp.addEventListener('change', () => updateRemaining(tr));
        });
    });

    modal.style.display = 'block';
}

function updateRemaining(tr) {
    const qty = parseFloat((tr.querySelector('.edit-qty').value || '0')) || 0;
    const used = parseFloat((tr.querySelector('.edit-used').value || '0')) || 0;
    const remainingEl = tr.querySelector('.edit-remaining');
    const remaining = Math.max(0, qty - used);
    remainingEl.textContent = formatNumber(remaining);
}

function removeProductFromBatch(index) {
    const batchId = document.getElementById('edit-batch-id').value;
    const batch = batches.find(b => b.id === batchId);
    if (!batch) return;
    batch.products.splice(index, 1);
    saveData();
    // Re-render edit modal content
    editBatch(batchId);
}

function saveBatchChanges(e) {
    if (e) e.preventDefault();
    const batchId = document.getElementById('edit-batch-id').value;
    const batch = batches.find(b => b.id === batchId);
    if (!batch) return;
    batch.supplier = document.getElementById('edit-batch-supplier').value.trim();
    batch.date = String(document.getElementById('edit-batch-date').value);

    // Read product rows
    const tbody = document.getElementById('edit-batch-products-tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.forEach((tr, idx) => {
        const qty = parseFloat((tr.querySelector('.edit-qty').value || '0')) || 0;
        const used = parseFloat((tr.querySelector('.edit-used').value || '0')) || 0;
        if (batch.products[idx]) {
            batch.products[idx].quantity = qty;
            batch.products[idx].used = used;
        }
    });

    // Recalculate inventory stock from batches to keep data consistent
    recalcInventoryFromBatches();
    saveData();
    updateBatchesDisplay();
    updateInventoryDisplay();
    updateReportsDisplay();
    showToast('Đã lưu thay đổi lô hàng', 'success');
    document.getElementById('edit-batch-modal').style.display = 'none';
}

function recalcInventoryFromBatches() {
    // For each product, sum remaining across all batches
    inventory.forEach(item => {
        let totalRemaining = 0;
        batches.forEach(batch => {
            batch.products.forEach(p => {
                if (p.productId === item.id) {
                    totalRemaining += Math.max(0, (p.quantity || 0) - (p.used || 0));
                }
            });
        });
        item.stock = totalRemaining;
    });
}

function updateInventorySummary() {
    const tbody = document.getElementById('inventory-summary-tbody');
    tbody.innerHTML = '';
    
    inventory.forEach(item => {
        const totalBatches = item.batches.length;
        const totalValue = item.stock * (item.importPrice || 0);
        const status = getStockStatus(item.stock);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${formatNumber(item.stock)}</td>
            <td>${totalBatches}</td>
            <td>${formatCurrency(totalValue)}</td>
            <td><span class="status-badge ${getStatusClass(status)}">${status}</span></td>
        `;
        tbody.appendChild(row);
    });
}

function updateInventoryDetail() {
    const tbody = document.getElementById('inventory-detail-tbody');
    tbody.innerHTML = '';
    
    batches.forEach(batch => {
        batch.products.forEach(productData => {
            const product = inventory.find(p => p.id === productData.productId);
            if (product) {
                const remaining = productData.quantity - productData.used;
                const status = remaining > 0 ? 'Còn hàng' : 'Hết hàng';
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${batch.id}</td>
                    <td>${String(batch.date)}</td>
                    <td>${batch.supplier}</td>
                    <td>${product.code}</td>
                    <td>${product.name}</td>
                    <td>${formatNumber(productData.quantity)}</td>
                    <td>${formatNumber(productData.used)}</td>
                    <td>${formatNumber(remaining)}</td>
                    <td><span class=\"status-badge ${getStatusClass(status)}\">${status}</span></td>
                `;
                tbody.appendChild(row);
            }
        });
    });
}

// Filter functions
function filterInventory() {
    filterTable('inventory-table');
}

function filterTable(tableId) {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');
    const searchInput = document.getElementById('search-inventory') || 
                       document.getElementById('search-orders') || 
                       document.getElementById('search-reports');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let show = true;
        
        // Global search
        if (searchTerm) {
            const rowText = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' ');
            if (!rowText.includes(searchTerm)) {
                show = false;
            }
        }
        
        // Column filters
        const filters = table.querySelectorAll('.filter-input, .filter-select');
        filters.forEach(filter => {
            const columnIndex = parseInt(filter.getAttribute('data-column'));
            const filterValue = filter.value.toLowerCase();
            
            if (filterValue && cells[columnIndex]) {
                const cellText = cells[columnIndex].textContent.toLowerCase();
                if (filter.type === 'number') {
                    const cellValue = parseFloat(cellText.replace(/[^\d.-]/g, '')) || 0;
                    const filterNum = parseFloat(filterValue) || 0;
                    if (cellValue < filterNum) {
                        show = false;
                    }
                } else if (!cellText.includes(filterValue)) {
                    show = false;
                }
            }
        });
        
        row.style.display = show ? '' : 'none';
    });
}

// Setup column filters
function setupColumnFilters() {
    const tables = ['inventory-table', 'orders-table', 'inventory-summary-table', 'inventory-detail-table', 'batches-table', 'debts-table'];
    
    tables.forEach(tableId => {
        const table = document.getElementById(tableId);
        if (!table) return;
        
        const filters = table.querySelectorAll('.filter-input, .filter-select');
        filters.forEach(filter => {
            filter.addEventListener('input', function() {
                filterTable(tableId);
            });
            filter.addEventListener('change', function() {
                filterTable(tableId);
            });
        });
    });
}

// Export functions
function exportToCSV(tableId, filename) {
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tr');
    let csv = [];
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('th, td');
        const rowData = Array.from(cells).map(cell => {
            let text = cell.textContent.trim();
            // Remove status badges and buttons
            text = text.replace(/\s+/g, ' ').trim();
            return `"${text}"`;
        });
        csv.push(rowData.join(','));
    });
    
    const csvContent = csv.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showDebtHistoryByPhone(phone) {
    const box = document.getElementById('debt-history');
    if (!box) return;
    if (!phone) { box.style.display = 'none'; box.innerHTML = ''; return; }
    const ordersByPhone = orders.filter(o => (o.customerPhone || o.phone || '') === phone);
    if (ordersByPhone.length === 0) { box.style.display = 'none'; box.innerHTML = ''; return; }
    const name = ordersByPhone[0].customerName || ordersByPhone[0].customer || '';
    const address = ordersByPhone[0].customerAddress || ordersByPhone[0].address || '';
    const totalOrders = ordersByPhone.length;
    const totalAmount = ordersByPhone.reduce((s,o)=>s+(o.total||0),0);
    const paidAmount = payments
        .filter(p => (p.customerPhone||'') === phone)
        .reduce((s,p)=>s+(p.amount||0),0);
    const debtAmount = Math.max(0, totalAmount - paidAmount);
    let list = '';
    ordersByPhone.slice(0,5).forEach(o => {
        list += `<li>#${o.id} • ${o.date} • ${formatCurrency(o.total)} • ${o.status}</li>`;
    });
    const more = ordersByPhone.length > 5 ? `<div style="margin-top:6px;color:#824">... và ${ordersByPhone.length-5} đơn khác</div>` : '';
    box.innerHTML = `
        <div><strong>${name}</strong> • ${phone}</div>
        <div>${address}</div>
        <div style="margin:6px 0">Đã mua: <strong>${totalOrders}</strong> đơn • Tổng mua: <strong>${formatCurrency(totalAmount)}</strong></div>
        <div>Đã trả: <strong style="color:#166534">${formatCurrency(paidAmount)}</strong> • Còn nợ: <strong style="color:#991b1b">${formatCurrency(debtAmount)}</strong></div>
        <ul style="margin:8px 0 0 16px">${list}</ul>
        ${more}
    `;
    box.style.display = 'block';
}

// Debts management
function computeCustomerDebts() {
    const paymentsMap = {};
    payments.forEach(p => {
        const key = (p.customerName || '') + '|' + (p.customerPhone || '');
        paymentsMap[key] = (paymentsMap[key] || 0) + (p.amount || 0);
    });
    const customersMap = {};
    orders.forEach(o => {
        const key = (o.customerName || o.customer || '') + '|' + (o.customerPhone || o.phone || '');
        if (!customersMap[key]) {
            customersMap[key] = { name: (o.customerName || o.customer || ''), phone: (o.customerPhone || o.phone || ''), address: (o.customerAddress || o.address || ''), orders: 0, total: 0, paid: 0 };
        }
        customersMap[key].orders += 1;
        customersMap[key].total += (o.total || 0);
    });
    Object.keys(customersMap).forEach(key => {
        customersMap[key].paid = paymentsMap[key] || 0;
        customersMap[key].debt = Math.max(0, customersMap[key].total - customersMap[key].paid);
    });
    return Object.values(customersMap);
}

function updateDebtsDisplay() {
    const tbody = document.getElementById('debts-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const data = computeCustomerDebts();
    filteredData.debts = data; // simple: global search handled by filterTable
    // pagination
    const totalRecords = filteredData.debts.length;
    const totalPages = Math.ceil(totalRecords / pageSize.debts);
    const startIndex = (currentPage.debts - 1) * pageSize.debts;
    const endIndex = Math.min(startIndex + pageSize.debts, totalRecords);
    document.getElementById('debts-total-records').textContent = totalRecords;
    const current = filteredData.debts.slice(startIndex, endIndex);
    current.forEach(c => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${c.name}</td>
            <td>${c.phone}</td>
            <td>${c.address || ''}</td>
            <td>${c.orders}</td>
            <td>${formatCurrency(c.total)}</td>
            <td>${formatCurrency(c.paid)}</td>
            <td>${formatCurrency(c.debt)}</td>
            <td>
                <button class="btn btn-small btn-secondary" onclick="viewCustomerOrders('${c.name}','${c.phone}')"><i class="fas fa-eye"></i> Xem đơn</button>
                <button class="btn btn-small btn-primary" onclick="openPaymentModal('${c.name}','${c.phone}')"><i class="fas fa-plus"></i> Thu tiền</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    updatePagination('debts', totalPages);
}

function openPaymentModal(name, phone) {
    const modal = document.getElementById('payment-modal');
    if (!modal) return;
    document.getElementById('payment-customer').value = name;
    document.getElementById('payment-phone').value = phone;
    document.getElementById('payment-amount').value = 0;
    document.getElementById('payment-date').value = new Date().toISOString().slice(0,10);
    document.getElementById('payment-note').value = '';
    modal.style.display = 'block';
    const form = document.getElementById('payment-form');
    form.onsubmit = (e) => { e.preventDefault(); savePayment(); };
}

function savePayment() {
    const name = document.getElementById('payment-customer').value.trim();
    const phone = document.getElementById('payment-phone').value.trim();
    const amount = parseFloat(document.getElementById('payment-amount').value) || 0;
    const date = String(document.getElementById('payment-date').value) || new Date().toISOString().slice(0,10);
    const note = document.getElementById('payment-note').value.trim();
    if (!name || amount <= 0) {
        showToast('Vui lòng nhập số tiền hợp lệ', 'error');
        return;
    }
    payments.push({ customerName: name, customerPhone: phone, amount, date, note });
    saveData();
    document.getElementById('payment-modal').style.display = 'none';
    updateDebtsDisplay();
    showToast('Đã ghi nhận thanh toán', 'success');
}

function viewCustomerOrders(name, phone) {
    const modal = document.getElementById('customer-orders-modal');
    const content = document.getElementById('customer-orders-content');
    if (!modal || !content) return;
    const customerOrders = orders.filter(o => (o.customerName === name || o.customer === name) && ((o.customerPhone || o.phone || '') === phone));
    if (customerOrders.length === 0) {
        content.innerHTML = '<p>Không có đơn hàng nào.</p>';
    } else {
        let rows = '';
        customerOrders.forEach(o => {
            rows += `
                <tr>
                    <td>${o.id}</td>
                    <td>${o.date}</td>
                    <td>${formatCurrency(o.total)}</td>
                    <td><span class="status-badge ${getStatusClass(o.status)}">${o.status}</span></td>
                    <td><button class="btn btn-small" onclick="viewOrderDetail('${o.id}')">Xem</button></td>
                </tr>
            `;
        });
        content.innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Mã đơn</th>
                        <th>Ngày</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        `;
    }
    modal.style.display = 'block';
}
// Toast notifications
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Export order (invoice or warehouse slip)
function exportOrderReceipt(orderId, showPrices) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    if (order.status === 'Hủy') {
        showToast('Đơn hàng đã hủy, không thể xuất phiếu.', 'error');
        return;
    }

    // Build printable content
    let rows = '';
    order.products.forEach(p => {
        const lineTotal = p.quantity * p.price;
        rows += `
            <tr>
                <td>${p.code}</td>
                <td>${p.name}</td>
                <td class="text-right">${formatNumber(p.quantity)}</td>
                ${showPrices ? `<td class=\"text-right\">${formatCurrency(p.price)}</td>` : ''}
                ${showPrices ? `<td class=\"text-right\">${formatCurrency(lineTotal)}</td>` : ''}
            </tr>
        `;
    });

    const title = showPrices ? 'HÓA ĐƠN BÁN HÀNG' : 'PHIẾU XUẤT KHO';
    const priceHeaders = showPrices ? '<th>Đơn giá</th><th>Thành tiền</th>' : '';
    const totalBlock = showPrices ? `<h3 style=\"text-align:right\">Tổng cộng: ${formatCurrency(order.total)}</h3>` : '';

    const printHtml = `
        <html>
        <head>
            <meta charset=\"utf-8\" />
            <title>${title} - ${order.id}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 16px; }
                h1 { text-align: center; margin-bottom: 8px; }
                .info p { margin: 4px 0; }
                table { width: 100%; border-collapse: collapse; margin-top: 12px; }
                th, td { border: 1px solid #ccc; padding: 8px; }
                th { background: #f5f5f5; }
                .text-right { text-align: right; }
            </style>
        </head>
        <body>
            <h1>${title}</h1>
            <div class=\"info\">
                <p><strong>Mã đơn:</strong> ${order.id}</p>
                <p><strong>Khách hàng:</strong> ${order.customerName}</p>
                <p><strong>Điện thoại:</strong> ${order.customerPhone}</p>
                <p><strong>Địa chỉ:</strong> ${order.customerAddress}</p>
                <p><strong>Ngày:</strong> ${order.date}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th class=\"text-right\">SL</th>
                        ${priceHeaders}
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
            ${totalBlock}
            <script>
                window.onload = function() { window.print(); };
            <\/script>
        </body>
        </html>
    `;

    const win = window.open('', '_blank');
    if (win) {
        win.document.open();
        win.document.write(printHtml);
        win.document.close();
    }

    // Update status to Exported if not already
    if (order.status !== 'Đã xuất phiếu') {
        order.status = 'Đã xuất phiếu';
        saveData();
        updateOrdersDisplay();
        showToast('Đã cập nhật trạng thái: Đã xuất phiếu', 'success');
    }
}

// Initialize sample data
function initializeSampleData() {
    // Add some sample orders
    if (orders.length === 0) {
        orders = [
            {
                id: 'HD001',
                customerName: 'Nguyễn Văn A',
                customerPhone: '0123456789',
                customerAddress: '123 Đường ABC, Quận 1, TP.HCM',
                date: '2024-01-20',
                products: [
                    { code: 'G001', name: 'Gạch men 30x30 trắng', quantity: 100, price: 35000 },
                    { code: 'G002', name: 'Gạch granite 60x60 đen', quantity: 50, price: 65000 }
                ],
                total: 6750000,
                status: 'Hoàn thành'
            },
            {
                id: 'HD002',
                customerName: 'Trần Thị B',
                customerPhone: '0987654321',
                customerAddress: '456 Đường XYZ, Quận 2, TP.HCM',
                date: '2024-01-22',
                products: [
                    { code: 'G003', name: 'Gạch ốp tường 25x40 xanh', quantity: 200, price: 28000 }
                ],
                total: 5600000,
                status: 'Đang xử lý'
            }
        ];
        saveData();
    }
}

// Pagination functions
function updatePagination(tableType, totalPages) {
    const prevBtn = document.getElementById(`${tableType}-prev`);
    const nextBtn = document.getElementById(`${tableType}-next`);
    const pageNumbers = document.getElementById(`${tableType}-page-numbers`);
    
    // Update prev/next buttons
    prevBtn.disabled = currentPage[tableType] <= 1;
    nextBtn.disabled = currentPage[tableType] >= totalPages;
    
    // Update page numbers
    pageNumbers.innerHTML = '';
    
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage[tableType] - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = i === currentPage[tableType] ? 'active' : '';
        pageBtn.onclick = () => goToPage(tableType, i);
        pageNumbers.appendChild(pageBtn);
    }
}

function goToPage(tableType, page) {
    currentPage[tableType] = page;
    switch(tableType) {
        case 'inventory':
            updateInventoryDisplay();
            break;
        case 'orders':
            updateOrdersDisplay();
            break;
        case 'batches':
            updateBatchesDisplay();
            break;
        case 'reports':
            updateReportsDisplay();
            break;
        case 'debts':
            updateDebtsDisplay();
            break;
    }
}

function changePageSize(tableType, newSize) {
    pageSize[tableType] = parseInt(newSize);
    currentPage[tableType] = 1;
    switch(tableType) {
        case 'inventory':
            updateInventoryDisplay();
            break;
        case 'orders':
            updateOrdersDisplay();
            break;
        case 'batches':
            updateBatchesDisplay();
            break;
        case 'reports':
            updateReportsDisplay();
            break;
        case 'debts':
            updateDebtsDisplay();
            break;
    }
}

// Setup pagination event listeners
function setupPaginationListeners() {
    // Inventory pagination
    document.getElementById('inventory-prev').addEventListener('click', () => {
        if (currentPage.inventory > 1) {
            goToPage('inventory', currentPage.inventory - 1);
        }
    });
    
    document.getElementById('inventory-next').addEventListener('click', () => {
        const totalPages = Math.ceil(filteredData.inventory.length / pageSize.inventory);
        if (currentPage.inventory < totalPages) {
            goToPage('inventory', currentPage.inventory + 1);
        }
    });
    
    document.getElementById('inventory-page-size').addEventListener('change', (e) => {
        changePageSize('inventory', e.target.value);
    });
    
    // Orders pagination
    document.getElementById('orders-prev').addEventListener('click', () => {
        if (currentPage.orders > 1) {
            goToPage('orders', currentPage.orders - 1);
        }
    });
    
    document.getElementById('orders-next').addEventListener('click', () => {
        const totalPages = Math.ceil(filteredData.orders.length / pageSize.orders);
        if (currentPage.orders < totalPages) {
            goToPage('orders', currentPage.orders + 1);
        }
    });
    
    document.getElementById('orders-page-size').addEventListener('change', (e) => {
        changePageSize('orders', e.target.value);
    });
    
    // Batches pagination
    document.getElementById('batches-prev').addEventListener('click', () => {
        if (currentPage.batches > 1) {
            goToPage('batches', currentPage.batches - 1);
        }
    });
    
    document.getElementById('batches-next').addEventListener('click', () => {
        const totalPages = Math.ceil(filteredData.batches.length / pageSize.batches);
        if (currentPage.batches < totalPages) {
            goToPage('batches', currentPage.batches + 1);
        }
    });
    
    document.getElementById('batches-page-size').addEventListener('change', (e) => {
        changePageSize('batches', e.target.value);
    });

    // Debts pagination
    const debtsPrev = document.getElementById('debts-prev');
    const debtsNext = document.getElementById('debts-next');
    const debtsPageSize = document.getElementById('debts-page-size');
    if (debtsPrev) debtsPrev.addEventListener('click', () => {
        if (currentPage.debts > 1) {
            goToPage('debts', currentPage.debts - 1);
        }
    });
    if (debtsNext) debtsNext.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredData.debts.length / pageSize.debts);
        if (currentPage.debts < totalPages) {
            goToPage('debts', currentPage.debts + 1);
        }
    });
    if (debtsPageSize) debtsPageSize.addEventListener('change', (e) => {
        changePageSize('debts', e.target.value);
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeSampleData();
    loadData();
    setupEventListeners();
    setupPaginationListeners();
    updateInventoryDisplay();
    updateOrdersDisplay();
    updateBatchesDisplay();
    updateReportsDisplay();
    updateDebtsDisplay();
    setupColumnFilters();
    // expose functions for inline handlers
    window.viewOrderDetail = viewOrderDetail;
    window.viewProductBatches = viewProductBatches;
    window.addOrderItem = addOrderItem;
    window.addImportItem = addImportItem;
    window.openPaymentModal = openPaymentModal;
    window.savePayment = savePayment;
    window.viewCustomerOrders = viewCustomerOrders;
});

// -----------------------------
// Add/Remove product rows & submit handlers
// -----------------------------

function createOrderItemRow() {
    const div = document.createElement('div');
    div.className = 'form-row';
    div.innerHTML = `
        <div class="form-group">
            <label>Mã SP</label>
            <input type="text" class="order-code" placeholder="VD: G001">
        </div>
        <div class="form-group">
            <label>Tên SP</label>
            <input type="text" class="order-name" placeholder="Tên sản phẩm">
        </div>
        <div class="form-group">
            <label>Số lượng</label>
            <input type="number" class="order-qty" min="1" value="1">
        </div>
        <div class="form-group">
            <label>Đơn giá (VNĐ)</label>
            <input type="number" class="order-price" min="0" value="0">
        </div>
        <div class="form-group">
            <label>&nbsp;</label>
            <button type="button" class="btn btn-danger btn-small remove-order-item">Xóa</button>
        </div>
    `;
    div.querySelector('.remove-order-item').addEventListener('click', () => div.remove());
    return div;
}

function addOrderItem() {
    const container = document.getElementById('order-items');
    if (!container) return;
    container.appendChild(createOrderItemRow());
}

function createImportItemRow() {
    const div = document.createElement('div');
    div.className = 'form-row import-items';
    div.innerHTML = `
        <div class="form-group">
            <label>Mã SP</label>
            <div class="search-container">
                <input type="text" class="import-code" placeholder="VD: GOT-CER-3060-WK">
                <div class="search-suggestions" style="display: none;"></div>
            </div>
        </div>
        <div class="form-group">
            <label>Tên SP</label>
            <div class="search-container">
                <input type="text" class="import-name" placeholder="Tên sản phẩm">
                <div class="search-suggestions" style="display: none;"></div>
            </div>
        </div>
        <div class="form-group">
            <label>Danh mục</label>
            <select class="import-category">
                <option value="Gạch ốp tường">Gạch ốp tường</option>
                <option value="Gạch lát nền">Gạch lát nền</option>
                <option value="Gạch trang trí">Gạch trang trí</option>
            </select>
        </div>
        <div class="form-group">
            <label>Kích thước</label>
            <input type="text" class="import-size" placeholder="VD: 30x60cm">
        </div>
        <div class="form-group">
            <label>Màu định nghĩa</label>
            <input type="text" class="import-color" placeholder="VD: Trắng kem">
        </div>
        <div class="form-group">
            <label>Số lượng nhập</label>
            <input type="number" class="import-qty" min="1" value="1">
        </div>
        <div class="form-group">
            <label>Giá tham chiếu (VNĐ)</label>
            <input type="number" class="import-reference-price" min="0" value="0">
        </div>
        <div class="form-group form-group-small">
            <label>&nbsp;</label>
            <button type="button" class="btn btn-danger btn-small remove-import-item">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    
    // Setup event listeners for the new row
    setupImportItemListeners(div);
    
    div.querySelector('.remove-import-item').addEventListener('click', () => div.remove());
    return div;
}

function setupImportItemListeners(row) {
    const codeInput = row.querySelector('.import-code');
    const nameInput = row.querySelector('.import-name');
    const categorySelect = row.querySelector('.import-category');
    const sizeInput = row.querySelector('.import-size');
    const colorInput = row.querySelector('.import-color');
    const referencePriceInput = row.querySelector('.import-reference-price');
    
    // Setup code input suggestions
    codeInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length < 2) {
            hideSuggestions(this);
            return;
        }
        
        const suggestions = inventory.filter(item => 
            item.code.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
        
        showSuggestions(this, suggestions, 'code');
    });
    
    // Setup name input suggestions
    nameInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length < 2) {
            hideSuggestions(this);
            return;
        }
        
        const suggestions = inventory.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
        
        showSuggestions(this, suggestions, 'name');
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!row.contains(e.target)) {
            hideSuggestions(codeInput);
            hideSuggestions(nameInput);
        }
    });
}

function showSuggestions(input, suggestions, type) {
    const container = input.parentElement;
    const suggestionsDiv = container.querySelector('.search-suggestions');
    
    if (suggestions.length === 0) {
        hideSuggestions(input);
        return;
    }
    
    suggestionsDiv.innerHTML = suggestions.map(item => `
        <div class="suggestion-item" data-item='${JSON.stringify(item)}'>
            <div class="suggestion-code">${item.code}</div>
            <div class="suggestion-name">${item.name}</div>
            <div class="suggestion-details">${item.category} - ${item.size} - ${item.color}</div>
        </div>
    `).join('');
    
    suggestionsDiv.style.display = 'block';
    
    // Add click listeners to suggestions
    suggestionsDiv.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            const product = JSON.parse(this.dataset.item);
            fillProductInfo(input, product);
            hideSuggestions(input);
        });
    });
}

function hideSuggestions(input) {
    const container = input.parentElement;
    const suggestionsDiv = container.querySelector('.search-suggestions');
    suggestionsDiv.style.display = 'none';
}

function fillProductInfo(input, product) {
    const row = input.closest('.form-row');
    
    // Fill all fields with product information
    row.querySelector('.import-code').value = product.code;
    row.querySelector('.import-name').value = product.name;
    row.querySelector('.import-category').value = product.category;
    row.querySelector('.import-size').value = product.size;
    row.querySelector('.import-color').value = product.color;
    row.querySelector('.import-reference-price').value = product.referencePrice || 0;
}

function initializeImportPage() {
    const container = document.getElementById('import-items');
    if (!container) return;
    
    // Clear existing content
    container.innerHTML = '';
    
    // Add first row
    addImportItem();
}

function addImportItem() {
    const container = document.getElementById('import-items');
    if (!container) return;
    const newRow = createImportItemRow();
    container.appendChild(newRow);
}

function handleCreateOrder(e) {
    e.preventDefault();
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const itemsContainer = document.getElementById('order-items');
    const rows = itemsContainer ? itemsContainer.querySelectorAll('.form-row') : [];
    let products = [];
    let total = 0;
    rows.forEach(r => {
        const code = r.querySelector('.order-code').value.trim();
        const pname = r.querySelector('.order-name').value.trim();
        const qty = parseInt(r.querySelector('.order-qty').value) || 0;
        const price = parseInt(r.querySelector('.order-price').value) || 0;
        if (code && pname && qty > 0) {
            products.push({ code, name: pname, quantity: qty, price });
            total += qty * price;
        }
    });
    if (products.length === 0) {
        showToast('Vui lòng thêm ít nhất 1 sản phẩm', 'warning');
        return;
    }
    const id = `HD${String(currentOrderId).padStart(3, '0')}`;
    currentOrderId += 1;
    const order = {
        id,
        customerName: name,
        customerPhone: phone,
        customerAddress: address,
        date: new Date().toISOString().slice(0,10),
        products,
        total,
        status: 'Đang xử lý'
    };
    orders.unshift(order);
    saveData();
    updateOrdersDisplay();
    showToast('Đã tạo đơn hàng mới', 'success');
    e.target.reset();
    const container = document.getElementById('order-items');
    if (container) { container.innerHTML = ''; addOrderItem(); }
}

function handleImportProducts(e) {
    e.preventDefault();
    const batchCode = document.getElementById('batch-code').value.trim();
    const supplier = document.getElementById('supplier').value.trim();
    const date = document.getElementById('import-date').value || new Date().toISOString().slice(0,10);
    const itemsContainer = document.getElementById('import-items');
    const rows = itemsContainer ? itemsContainer.querySelectorAll('.form-row') : [];
    let productsToAdd = [];
    
    // Check if batch code already exists
    if (batches.find(b => b.id === batchCode)) {
        showToast(`Mã lô ${batchCode} đã tồn tại. Vui lòng chọn mã khác.`, 'error');
        return;
    }
    
    rows.forEach(r => {
        const code = r.querySelector('.import-code').value.trim();
        const name = r.querySelector('.import-name').value.trim();
        const category = r.querySelector('.import-category').value.trim();
        const size = r.querySelector('.import-size').value.trim();
        const color = r.querySelector('.import-color').value.trim();
        const qty = parseInt(r.querySelector('.import-qty').value) || 0;
        const referencePrice = parseInt(r.querySelector('.import-reference-price').value) || 0;
        
        if (code && name && qty > 0) {
            // Update or insert inventory item
            let item = inventory.find(p => p.code === code);
            if (!item) {
                item = {
                    id: inventory.length ? Math.max(...inventory.map(i=>i.id))+1 : 1,
                    code, name,
                    category: category || 'Khác', 
                    unit: 'Hộp', 
                    size: size || '', 
                    color: color || '',
                    importPrice: referencePrice || 0,
                    referencePrice: referencePrice || 0,
                    stock: 0, 
                    supplier,
                    batches: []
                };
                inventory.push(item);
            } else {
                // Update existing item
                item.name = name;
                item.category = category || item.category;
                item.size = size || item.size;
                item.color = color || item.color;
            }
            if (referencePrice > 0) {
                item.importPrice = referencePrice;
                item.referencePrice = referencePrice;
            }
            item.stock += qty;
            productsToAdd.push({ productId: item.id, quantity: qty, used: 0 });
        }
    });
    
    if (productsToAdd.length === 0) {
        showToast('Vui lòng nhập ít nhất một sản phẩm', 'error');
        return;
    }
    
    batches.unshift({ id: batchCode, date: String(date), supplier, products: productsToAdd, status: 'Còn hàng' });
    // Link batches to inventory
    productsToAdd.forEach(p => {
        const item = inventory.find(x => x.id === p.productId);
        if (item) item.batches.push({ batchId: batchCode, quantity: p.quantity, used: 0 });
    });
    saveData();
    updateInventoryDisplay();
    updateBatchesDisplay();
    showToast(`Đã nhập kho lô ${batchCode}`, 'success');
    e.target.reset();
    initializeImportPage();
}
