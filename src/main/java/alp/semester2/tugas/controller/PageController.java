package alp.semester2.tugas.controller;

import alp.semester2.tugas.dto.ChatDto;
import alp.semester2.tugas.repository.UserRepository;
import alp.semester2.tugas.service.ChatService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

/**
 * PageController
 * -----------------------------------------------
 * Serve semua halaman Thymeleaf HTML.
 * Ini adalah controller untuk tampilan (view),
 * berbeda dari REST API controller di /api/**
 */
@Controller
public class PageController {

    private final ChatService chatService;
    private final UserRepository userRepo;

    public PageController(ChatService chatService, UserRepository userRepo) {
        this.chatService = chatService;
        this.userRepo    = userRepo;
    }

    // ---- Halaman Publik ----

    @GetMapping("/")
    public String landingPage() {
        return "index"; // → templates/index.html
    }

    @GetMapping("/login")
    public String loginPage() {
        return "login"; // → templates/login.html
    }

    @GetMapping("/register")
    public String registerPage() {
        return "register"; // → templates/register.html
    }

    // ---- Halaman yang butuh login ----

    @GetMapping("/dashboard")
    public String dashboard(Model model,
                            @AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails != null) {
            model.addAttribute("userName", userDetails.getUsername());
            Long userId = getUserId(userDetails);
            // Riwayat sesi
            model.addAttribute("sessions", chatService.getSessionHistory(userId));
        }
        return "dashboard"; // → templates/dashboard.html
    }

    @GetMapping("/chat/start")
    public String chatPage() {
        return "chatbot"; // → templates/chatbot.html
    }

    /**
     * Halaman hasil analisa — ambil data dari DB + penyakit dari database
     * URL: /chat/{sessionId}/result
     */
    @GetMapping("/chat/{sessionId}/result")
    public String resultPage(@PathVariable Long sessionId,
                             Model model,
                             @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = getUserId(userDetails);
        ChatDto.AnalysisResponse result = chatService.getResult(sessionId, userId);
        model.addAttribute("result", result);
        model.addAttribute("sessionId", sessionId);
        return "HasilAnalisis"; // → templates/HasilAnalisis.html
    }

    @GetMapping("/edukasi")
    public String edukasiPage() {
        return "edukasi"; // → templates/edukasi.html
    }

    @GetMapping("/edukasi/mental")
    public String kesehatanMentalPage() {
        return "kesehatanmental"; // → templates/kesehatanmental.html
    }

    @GetMapping("/edukasi/artikel/{id}")
    public String artikelPage(@PathVariable Long id, Model model) {
        model.addAttribute("artikelId", id);
        return "artikel1"; // → templates/artikel1.html
    }

    @GetMapping("/hoaks")
    public String hoaksPage() {
        return "hoaks"; // → templates/hoaks.html
    }

    @GetMapping("/informasi")
    public String pusatInformasiPage() {
        return "pusatinformasi"; // → templates/pusatinformasi.html
    }

    @GetMapping("/akun")
    public String akunPage(Model model,
                           @AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails != null) {
            model.addAttribute("email", userDetails.getUsername());
        }
        return "akun"; // → templates/akun.html
    }

    @GetMapping("/reminder")
    public String reminderPage() {
        return "reminder"; // → templates/reminder.html
    }

    @GetMapping("/notifikasi")
    public String notifikasiPage() {
        return "notifikasi"; // → templates/notifikasi.html
    }

    // ---- Helper ----
    private Long getUserId(UserDetails ud) {
        return userRepo.findByEmail(ud.getUsername())
            .orElseThrow(() -> new RuntimeException("User tidak ditemukan"))
            .getId();
    }
}
